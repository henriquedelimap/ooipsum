import { Accordion, AccordionSummary, AccordionDetails, Avatar, Container, Stack, Typography, FormControl, OutlinedInput } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { MdEdit, MdExpandMore, MdModeEditOutline, MdSend } from "react-icons/md"
import { useAuthContext } from "../../../Common/Context/Auth"
import { useBlogConfig } from "../../../Common/Context/BlogConfig"
import { drawerWidth } from "../menu"

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
      key: 'siteName'
    },
    {
      label: 'menu superior',
      key: 'appBarListItems'
    },
    {
      label: 'newsletter',
      key: 'newsletter'
    },
    {
      label: 'cartões de visita',
      key: 'homeMainCards'
    },
  ]

  console.log();

  const settingOptions = Object.keys(blogConfig)

  return (
    <Stack spacing={4} sx={{ pt: 2, width: { xs: '100%', md: `calc(100% - ${drawerWidth})` } }} >

      <Stack spacing={4} alignItems='center' sx={{ p: 4 }}>
        <Avatar sx={{ width: 200, height: 200 }} />

        <Stack alignItems='center' >
          <Stack direction='row'>
            <Typography fontFamily='Old Standard TT' textTransform='capitalize' variant='h4'>olá,</Typography>
            <Typography fontFamily='Old Standard TT'>{usuario?.username}</Typography>
          </Stack>
          <Typography color='#6d6d6d' variant='subtitle1' fontFamily='Outfit'>Gerencie suas informações para que o blog atenda suas necessidades.</Typography>
        </Stack>
      </Stack>

      <Container maxWidth='lg' >
        <Stack spacing={1}>

          {
            label.map((item, index) => (
              <Accordion elevation={0} key={index} expanded={expanded === `${index}`} onChange={handleChange(`${index}`)}>
                <AccordionSummary expandIcon={<MdExpandMore />}
                  aria-controls={`${label}-content`}
                  id={`${label}-header`}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {item.label}
                  </Typography
                  >
                  <Typography>
                    {blogConfig?.siteName}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <FormControl fullWidth>
                    <OutlinedInput
                      disabled
                      value={blogConfig?.siteName}
                      size='small'
                      endAdornment={<MdModeEditOutline />}
                    />
                  </FormControl>
                </AccordionDetails>


              </Accordion>

            ))
          }
        </Stack>

      </Container>
    </Stack>
  )
}