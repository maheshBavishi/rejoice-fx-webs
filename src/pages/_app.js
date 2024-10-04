import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/mixins/index.scss';
import Wrapper from "@/components/wrapper";
export default function App({ Component, pageProps }) {
  return(
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
