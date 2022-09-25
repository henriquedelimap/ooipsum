import { Accordion, AccordionSummary, AccordionDetails, Avatar, Container, Stack, Typography, FormControl, OutlinedInput, Button, formLabelClasses } from "@mui/material"
import { SyntheticEvent, useState, useEffect, ReactElement } from "react"
import { MdEdit, MdExpandMore, MdModeEditOutline, MdSend } from "react-icons/md"
import { useAuthContext } from "../../../Common/Context/Auth"
import { useBlogConfig } from "../../../Common/Context/BlogConfig"
import { useInternalConfig } from "../../../Common/Context/InternalConfig"
import { drawerWidth } from "../menu"
import { ConfigurarHeader } from "./header"


interface Prop {
  index: number
  children: ReactElement
  label: string
  value?: string
}
export const MyAccordion = (prop: Prop) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const { index, children, label, value } = prop

  const handleChange = (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Accordion elevation={0} expanded={expanded === `${index}`} onChange={handleChange(`${index}`)}>
      <AccordionSummary expandIcon={<MdExpandMore />}
        aria-controls={`${label}-content`}
        id={`${label}-header`}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {label}
        </Typography>
        <Typography>
          {value}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {children}
      </AccordionDetails>


    </Accordion>
  )
}


export const Configurar = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const { blogConfig } = useBlogConfig()
  const { usuario } = useAuthContext()
  const handleChange = (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const label = [
    {
      label: 'nome do site',
      key: 'siteName',
      multi: false
    },
    {
      label: 'menu superior',
      key: 'appBarListItems',
      multi: true

    },
    {
      label: 'newsletter',
      key: 'newsletter',
      multi: true
    },
    {
      label: 'cartões de visita',
      key: 'homeMainCards',
      multi: true
    },
  ]



  const { setAppBarAction } = useInternalConfig()

  useEffect(() => {
    setAppBarAction(<></>)
  }, [])
  // console.log(blogConfig);


  return (
    <Stack spacing={4} sx={{ pt: 2, width: '100%' }} >

      <ConfigurarHeader />

      <Container maxWidth='lg' >
        <Stack spacing={1}>

          {
            label?.map((item, index) => {
              const types = blogConfig !== undefined ? blogConfig[`${item.key}`] : ''
              const multipleOptions = typeof types === typeof [] ? types : ''
              let options
              if (multipleOptions[0] !== undefined) {
                const typename = multipleOptions.map((item: any) => item.__typename)[0]
                options = blogConfig[`${item.key}`][0].__typename === typename ? blogConfig[`${item.key}`] : ''

              }
              const keys = (Object.keys(options !== undefined ? options[0] : ''))
              console.log(keys);

              return (

                <>
                  {item?.multi === true
                    ? <MyAccordion key={index} index={index} label={item?.label}>
                      <>
                        {
                          keys?.map((subItem, index) => (
                            <MyAccordion index={index} label={subItem} >
                              <FormControl fullWidth>
                                <OutlinedInput
                                  disabled
                                  value={blogConfig?.siteName}
                                  size='small'
                                  endAdornment={<MdModeEditOutline />}
                                />
                              </FormControl>
                            </MyAccordion>
                          ))
                        }
                      </>
                    </MyAccordion>
                    : < MyAccordion key={index} index={index} label={item?.label}>
                      <>
                        {

                          <FormControl fullWidth>
                            <OutlinedInput
                              disabled
                              value={blogConfig?.siteName}
                              size='small'
                              endAdornment={<MdModeEditOutline />}
                            />
                          </FormControl>
                        }
                      </>

                    </MyAccordion>
                  }
                </>

              )


            }
            )
          }
        </Stack>

      </Container >
    </Stack >
  )
}