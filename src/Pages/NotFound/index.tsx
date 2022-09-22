import { Route, Routes, useNavigate } from "react-router-dom"
import { DefaultPage } from "../DefaultPage"
import errorNotFound from '../../assets/error.png'
import { Button } from "@mui/material"

export const NotFound = () => {
  return (
    <Routes>
      <Route element={<DefaultPage />}>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}


const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Button onClick={() => navigate(-1)}>voltar</Button>
      <img style={{ width: '100%' }} src={errorNotFound} />
    </>
  )
}