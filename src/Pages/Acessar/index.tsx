import { Stack, Container } from "@mui/material"
import { LoginForm } from "./loginForm"

export const Acessar = () => {
    return (
        <Stack sx={{ mb: -8 }} direction='row' alignItems='center'>

            <Stack sx={{ width: { xs: '100%', md: '50%', lg: '50%' }, p: 4, mt: -8, background: '#fff' }}>
                <LoginForm />
            </Stack>

            <Stack
                alignItems='center'
                justifyContent='center'
                sx={{
                    width: { xs: '0%', md: '100%', lg: '100%' },
                    display: { xs: 'none', md: 'flex', lg: 'flex' },
                    height: '100vh',
                    mt: -8,
                    borderRadius: '0 0 .3rem 0',
                    position: 'relative'
                }}>

                <Stack sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 500,
                    background: '#0066cc',
                    boxShadow: 'inset 20px 20px 20px #ffffff2f'
                }} />
                <Stack sx={{
                    width: "80%",
                    height: 180,
                    top: '50%',
                    borderRadius: '.4rem',
                    position: 'absolute',
                    background: '#ffffff0f',
                    backdropFilter: 'blur(18px)',
                }} />
            </Stack>
        </Stack>

    )
}