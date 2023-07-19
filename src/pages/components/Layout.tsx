// components/Layout.tsx
import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Uhumdrum | Creative Studio based in Void</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="fixed z-[999] w-[100%] h-[100%] flex flex-col justify-between">
        <div className="flex justify-center items-center h-16">
          {/* img with svg logo.svg */}
          <img
            src="./images/logo.svg"
            alt="logo"
            className=" w-32 p-4 text-white"
          />
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
