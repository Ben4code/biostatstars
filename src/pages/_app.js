import NextLink from 'next/link'
import "../../public/scss/main.scss";
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
