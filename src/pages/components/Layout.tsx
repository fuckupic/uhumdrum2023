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
      <header className="fixed z-[999] w-[100%] h-[100%] flex flex-col justify-between p-8">
        <div className="flex flex-col justify-between items-center h-16">
          {/* img with svg logo.svg */}
          <img
            src="./images/logo.svg"
            alt="logo"
            className=" w-40 text-white"
          />
        </div>
        {/* Add white social icons to this div */}
        {/* Add white social icons to this div */}
        <div className="h-16 flex items-end gap-2 justify-end">
          <a
            href="https://youtube.com/@uhumdrum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/youtube-icon.svg"
              alt="YouTube"
              className="h-10 w-10 hover:scale-[1.5] transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
