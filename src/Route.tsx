import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Acessar, Cadastrar, DefaultPage, Home, NotFound, BlogRotas, Blog } from './Pages'
import { ScrollToTop } from './Utils'

export const Rotas = () => {

  return (
    <Router>

      <ScrollToTop>
        <Routes>
          <Route element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='acessar' element={<Acessar />} />
            <Route path='blog' element={<Blog />} />
          </Route>

          <Route path='blog/:id' element={<BlogRotas />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Router >
  )
}