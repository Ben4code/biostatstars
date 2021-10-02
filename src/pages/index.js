import Head from "next/head";
import MainHeader from "../components/Home/MainHeader";
import About from '../components/Home/About'
import TestimonialList from '../components/Home/TestimonialList'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BioStatStars - Home</title>
        <meta name="description" content="An E-learning platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <MainHeader />
        <div className="container">
          <About/>
          <TestimonialList/>
        </div>
      </div>
    </div>
  );
}
