import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Woosh Wash</title>
        <meta name="description" content="Car Wash Website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
