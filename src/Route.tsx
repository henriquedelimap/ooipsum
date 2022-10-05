import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { useAuthContext } from './Common/Context/Auth'
import { usePostContext } from './Common/Context/Post/usePostContext'
import { Acessar, DefaultPage, Home, NotFound, BlogRotas, Blog } from './Pages'
import { AdminDefaultPage } from './Pages/Admin/AdminDefaultPage'
import { Configurar } from './Pages/Admin/Config'
import { AdminHomePage } from './Pages/Admin/Home'
import { BlogPost } from './Pages/Admin/Post'
import { PostLayout } from './Pages/Blog/Post/PostPage/PostLayout'
import { ScrollToTop } from './Utils'

export const Rotas = () => {
  const { auth } = useAuthContext()
  const { post } = usePostContext()
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

          <Route path='admin' element={!!auth ? <AdminDefaultPage /> : <Acessar />} >
            <Route index element={<AdminHomePage />} />
            <Route path='blog' element={<BlogPost />} />
            <Route path='configurar' element={<Configurar />} />
            <Route path='blog/:id' element={<PostLayout page={post} />} />
          </Route>


          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Router >
  )
}