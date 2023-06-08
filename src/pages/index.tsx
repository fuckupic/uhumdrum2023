import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      {/* <Services />
      <Portfolio /> */}
    </>
  )
}
