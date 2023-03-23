import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title: string,
  description: string,
  children: ReactNode
}

const Layout = ({ title = 'JODOCK', description, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <main>
      { children }
    </main>
  </>
)

export default Layout;