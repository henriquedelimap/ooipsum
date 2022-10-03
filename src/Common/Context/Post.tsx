import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../../Types";

export interface IPostContext {
  post: IPost
}

const PostContext = createContext<IPostContext | null>(null)

interface Prop {
  children: ReactNode
}
export const PostProvider = ({ children }: Prop) => {

  const [post, setPost] = useState<IPost>({
    permalink: {
      option: 'post-title',
      url: '',
    },
    privacy: 'public',
    propagation: 'blog',
    background: {
      type: 'solido',
      color: undefined,
      url: undefined
    }
  })

  return (
    <PostContext.Provider value={{ post }}>
      {children}

    </PostContext.Provider>
  )
}

export const usePostContext = () => {
  const { post } = useContext(PostContext) as IPostContext

  return (
    post

  )
}