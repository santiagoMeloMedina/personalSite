import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  const waitBeforeRoute = (url, callback = ()=>{}, time = 1500) => {
      callback();
      setTimeout(() => {
          router.replace(url);
      }, time);
  }
  
  return <Component {...pageProps} waitBeforeRoute={waitBeforeRoute} />
}

export default MyApp
