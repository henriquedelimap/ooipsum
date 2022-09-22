import * as React from 'react'
import { useScrollTrigger, Slide } from "@mui/material"
import { useLocation } from 'react-router-dom'


interface Prop {
  window?: () => Window
  children: React.ReactElement
}

export const HiddenOnScroll = (prop: Prop) => {
  const { window, children } = prop
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} in={!trigger}>
      {children}
    </Slide>
  )
}

export const ScrollToTop = (props: { children: any; }) => {
  const location = useLocation()
  const { pathname } = location;

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return <>{props.children}</>
}


export const Id = (a?: string, b?: string) => {

  if (a === undefined || b === undefined) {
    a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere. Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias nihil perspiciatis odio corrupti eaque quae repudiandae sequi, beatae vero optio consequuntur incidunt inventore accusantium distinctio nisi. Corrupti, nemo quidem animi cupiditate nostrum maiores voluptas tempore repudiandae est voluptatibus, aliquam aliquid quia rerum id nihil ipsam veritatis non suscipit. Aliquid atque sint alias!'
    b = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere. Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias nihil perspiciatis odio corrupti eaque quae repudiandae sequi, beatae vero optio consequuntur incidunt inventore accusantium distinctio nisi. Corrupti, nemo quidem animi cupiditate nostrum maiores voluptas tempore repudiandae est voluptatibus, aliquam aliquid quia rerum id nihil ipsam veritatis non suscipit. Aliquid atque sint alias!'
  }

  const c = [...a, ...b, ...a, ...b]

  const d = a[0] + a[1] + a[2] + a[3]
  const e = b[0] + b[1] + b[2] + b[3]
  const f = Math.floor(Math.random() * c.length)
  const g = [d, f, e, d, f, e].sort(() => Math.random() - .5).join('').toString()
  const id = `${d}-${e}-${c.length}-${g}`
  return id
}
