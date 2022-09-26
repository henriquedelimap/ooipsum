import { Stack, FormControl, InputLabel, OutlinedInput, Button, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../Common/Context/Auth"

export const LoginForm = () => {

  const { loading, login, error, user, usuario } = useAuthContext()

  const [username, setUsername] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)

  const navigate = useNavigate()

  useEffect(() => {
    if (!!usuario && !error) {
      navigate(-1)
    }
  }, [login, usuario])

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (username && password) {
      login(String(username), String(password))
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <Stack
        justifyContent='center'
        spacing={8}
      >

        <Stack spacing={4} sx={{ width: ' 100%' }} >
          <Typography variant='h4' fontWeight={200}>Minha conta</Typography>
          <Typography variant='subtitle1' color='error' >{error?.message}</Typography>

          <FormControl sx={{ width: ' 100%' }} >
            <InputLabel color={error ? 'error' : 'primary'} size='small'>username</InputLabel>
            <OutlinedInput error={!!error} label='username' disabled={loading} onChange={(e: any) => setUsername(`${e.target.value}`.toLowerCase())} size='small'></OutlinedInput>
          </FormControl>

          <FormControl sx={{ width: ' 100%' }} >
            <InputLabel color={error ? 'error' : 'primary'} size='small'>password</InputLabel>
            <OutlinedInput type='password' error={!!error} label='password' disabled={loading} onChange={(e: any) => setPassword(e.target.value)} size='small'></OutlinedInput>
          </FormControl>
        </Stack>
        <Button disabled={loading} type='submit'
          color='primary' variant='contained' sx={{ width: '100%', boxShadow: 'none' }}>
          <Typography fontFamily='Outfit' fontWeight={600} color='white'>acessar</Typography>
        </Button>
      </Stack>
    </form >
  )
}