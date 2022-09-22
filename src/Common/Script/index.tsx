import { MdContactMail, MdMailOutline } from "react-icons/md";
import { Logo } from "../../assets/logoipsum-268";
import { Id } from "../../Utils";

export const Script = {
  logo: <Logo />,
  siteName: 'genérico',
  appBarListItems: [
    {
      to: '',
      label: 'home'
    },
    {
      to: 'blog',
      label: 'blog'
    },
    {
      to: 'acessar',
      label: 'acessar'
    },
  ],
  homeInput: {
    icon: <MdMailOutline style={{ padding: 10 }} fontSize={64} />,
    placeholder: 'informe seu email e receba conteúdos exclusivos',
    button: 'assinar'
  },
  homeMainCards: [
    {
      background: '1',
      description: '',
    },
    {
      background: '2',
      description: '',
    },
    {
      background: '3',
      description: '',
    }
  ],
  blog: [
    {
      tag: 'lapsoo',
      posts: [
        {
          id: 'abc123',
          title: 'conheça o lapsoo',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          description: '',
          img: 'https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',
          createdAt: '20 set 2022'
        },
        {
          id: 'bac213',
          title: 'como usar?',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          description: '',
          img: 'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',

          createdAt: '12 out 2022'

        },
        {
          id: 'abs131',
          title: 'quando usar?',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          description: '',
          img: 'https://images.unsplash.com/photo-1644318295821-12c4ddf2a36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',

          createdAt: '10 set 2022'

        }
      ]
    },
    {
      tag: 'nextoo',
      posts: [
        {
          id: 'abc12123',
          title: 'conheça o nextoo',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          description: '',
          img: 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',
          createdAt: '2 dez 2022'
        },
        {
          id: 'asdbc123',
          title: 'como usar?',
          description: '',
          img: 'https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          createdAt: '28 jan 2022'
        },
        {
          id: 'abcs23',
          title: 'quando usar?',
          description: '',
          img: 'https://images.unsplash.com/photo-1637819203905-2294a31391d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam commodi dolorem est mollitia optio, libero perspiciatis eos sit doloremque facere consequatur nemo exercitationem iure consectetur rerum hic? Non distinctio repellat temporibus quidem saepe? Suscipit facilis modi aliquid numquam sapiente repellat placeat labore et debitis eaque repellendus deleniti non ut, iste itaque a commodi vero amet maxime nemo. Quam, magnam itaque! Iusto est ex ab totam debitis harum similique perferendis?',
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia dolor nemo perspiciatis neque facilis nostrum molestiae doloribus similique perferendis!',
          createdAt: '20 set 2022'
        }
      ]
    }
  ],
  newsletter: {
    title: 'fique por dentro das novidades',
    subtitle: 'assine nossa newsletter para receber conteúdos exclusivos em primeira mão'
  }

}