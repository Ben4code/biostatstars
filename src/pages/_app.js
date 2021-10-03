import Head from "next/head";
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import "../../public/scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
       <Head>
        <title>BioStatStars</title>
        <link
          rel="stylesheet"
          // href="https://stackpath.bootstrapcdn.com/font-awesoreme/4.7.0/css/font-awesome.min.css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* <link rel="shortcut icon" href="/img/favicon.ico" /> */}
      </Head>
     
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
