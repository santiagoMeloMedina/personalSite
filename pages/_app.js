import '../styles/globals.css';
import { useRouter } from 'next/router';
import Loading from '../component/loading';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ loading: false });
  const router = useRouter();
  const waitBeforeRoute = (url, callback = ()=>{}, time = 1500) => {
      callback();
      setTimeout(() => {
          router.replace(url);
      }, time);
  }

  const changeLoadingState = (value) => {
    setState({ ...state, loading: value });
  }
  
  return (
      <div>
        <Component {...pageProps} waitBeforeRoute={waitBeforeRoute} changeLoadingState={changeLoadingState}/>
        <Loading {...pageProps} loading={state.loading}></Loading>
      </div>
  );
}

export default MyApp
