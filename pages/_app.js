import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '@fontsource/source-code-pro/300.css'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )

}

export default MyApp
