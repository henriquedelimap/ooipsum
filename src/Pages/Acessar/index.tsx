import { Stack, Container } from "@mui/material"
import { LoginForm } from "./loginForm"

export const Acessar = () => {
    return (
        <Stack direction='row' alignItems='center'>

            <Stack sx={{ width: { xs: '100%', md: '50%', lg: '50%' }, height: '100%', p: 4 }}>
                <LoginForm />
            </Stack>

            <Stack sx={{ width: { xs: '0%', md: '100%', lg: '100%' }, background: '#3d3d3d', height: '100vh', mb: -8, borderRadius: '0 0 .3rem 0' }}>

            </Stack>
        </Stack>

    )
}