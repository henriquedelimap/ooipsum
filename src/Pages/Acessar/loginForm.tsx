import { Stack, FormControl, InputLabel, OutlinedInput, Button, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const LoginForm = () => {

  const [username, setUsername] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)

  const navigate = useNavigate()

  const usuario = 'henrique'
  const error = false
  const loading = false
  const login = (username: string, password: string) => { }

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (username && password) {
      login(String(username), String(password))
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)} style={{ width: '100%' }}>
      <Stack
        alignItems='center'
        justifyContent='center'
        spacing={8}
        sx={{ height: '80vh', width: '100%' }}
      >

        <Stack alignItems='center' spacing={4} sx={{ width: '100%' }} >
          <Typography variant='h4' fontWeight={200}>Minha conta</Typography>
          <Typography variant='subtitle1' color='error' >{error}</Typography>

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