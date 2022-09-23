import { ApolloError, useQuery } from "@apollo/client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GET_BLOGCONFIG } from "../Api/GET/get";

interface IBlogConfig {
  blogConfig: any
  loading: boolean
  error: ApolloError | undefined
}

const BlogConfigContext = createContext<IBlogConfig | null>(null)

interface Prop {
  children: ReactNode
}

export const BlogConfigProvider = (prop: Prop) => {
  const [blogConfig, setBlogConfig] = useState()
  const { data, error, loading } = useQuery(GET_BLOGCONFIG)
  useEffect(() => {
    if (data !== undefined) {
      setBlogConfig(data?.blogConfig[0])
    }
  }, [data])
  return (
    <BlogConfigContext.Provider value={{ blogConfig, loading, error }}>
      {prop.children}
    </BlogConfigContext.Provider>
  )
}

export const useBlogConfig = () => {
  const { blogConfig, loading, error } = useContext(BlogConfigContext) as IBlogConfig

  return {
    blogConfig, loading, error
  }
}