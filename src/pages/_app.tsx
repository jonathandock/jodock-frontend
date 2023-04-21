import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Abril_Fatface, Anton, Merriweather, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--montserrat-font'
});

const merriweather = Merriweather({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--merriweather-font'
})

const anton = Anton({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--anton-font'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${montserrat.style.fontFamily};
        }
        .anton {
          font-family: ${anton.style.fontFamily};
        }
        .merriweather {
          font-family: ${merriweather.style.fontFamily};
        }
      `}</style>
      
      <main >
        <Component {...pageProps} />
      </main>
    </>
  )
}
