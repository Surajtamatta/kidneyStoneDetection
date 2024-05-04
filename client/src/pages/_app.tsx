import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NavProvider} from '../utils/Context/navcontext'
import { ConfigProvider } from 'antd';
import theme from '../styles/themeConfig';
import { LoginProvider } from '@/utils/Context/login';

export default function App({ Component, pageProps }: AppProps) {
  return <ConfigProvider theme={theme}>

 <LoginProvider>
 <NavProvider>
      <Component {...pageProps} />
  </NavProvider>
 </LoginProvider>
</ConfigProvider>
    

 
}
