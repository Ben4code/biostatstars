import Head from 'next/head'
import MainHeader from '../components/Home/MainHeader'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BioStatStars - Home</title>
        <meta name="description" content="An E-learning platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <MainHeader/>
        <h2>Home</h2>
      </main>
    </div>
  )
}
