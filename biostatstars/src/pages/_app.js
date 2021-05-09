import NextLink from 'next/link'
import "../../public/scss/main.scss";



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ul>
        <NextLink href="/" >Home</NextLink>
        <NextLink href="/about" >About</NextLink>
        <NextLink href="/about/about-us" >About Us</NextLink>
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
      </ul>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
