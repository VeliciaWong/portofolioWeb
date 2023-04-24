import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Velicia Wong&apos;s Portofolio</title>
        <meta></meta>
        <link rel='icon'></link>
      </Head>

      <main>
        <section className='bg-[#3e4437] min-h-screen text-white p-5'>
          <nav className='flex justify-between'>
            <h1>developed by</h1>
            <div className='flex space-x-5'>
              <div>Home</div>
              <div><a href="#">Projects</a></div>
              <div>Tools</div>
            </div>
            <div>Contacts</div>
          </nav>
        </section>
      </main>
    </div>

  )
}
