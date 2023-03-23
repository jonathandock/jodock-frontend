import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

const Home = () => (
  <Layout 
    title="JODOCK"
    description="Site officiel de JODOCK | auteur, compositeur, interprète"
  >
  </Layout>
)

export default Home;
