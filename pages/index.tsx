import { HomeContent } from '@src/components/HomeContent'
import type { NextPage } from 'next'
import Head from 'next/head'




const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sub Social Network</title>
        <meta name="description" content="Dapp Chain Network Connection status" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
        <h1 className='hero-text'>BlockChain Networks</h1>
        <HomeContent />
      </main>
    </div>

  )
}

export default Home
