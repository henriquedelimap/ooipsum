import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { Rotas } from './Route'
import { Providers } from './Common/Context/Providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <Rotas />
  </Providers>
)
