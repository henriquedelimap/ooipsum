import { Route, Routes, useParams } from "react-router-dom"
import { DefaultPage } from "../DefaultPage"
import { PostPage } from "./Post/PostPage"

export const BlogRotas = () => {
    const { id } = useParams()
    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={<PostPage />} />
            </Route>
        </Routes>
    )
}