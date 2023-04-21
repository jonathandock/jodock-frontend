import Head from "next/head";
import { ReactNode } from "react";
import Nav from "./Header";

type LayoutProps = {
  title: string,
  description: string,
  children: ReactNode
}

const Layout = ({ title = 'JODOCK', description, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    {/* <Nav /> */}
    <main>
      { children }
    </main>
  </>
)

export default Layout;