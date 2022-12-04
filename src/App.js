// import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
//! components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MainServices from './components/mainServices/MainServices'
import Introduction from './components/Introduction/Introduction'
import Customers from './components/Customers/Customers'
import Favors from './components/Favors/Favors'
import Testimonial from './components/Testimonial/Testimonial'
import News from './components/News/News'
import Footer from './components/Footer/Footer'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'IRANSans,sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            paddingTop: '20px',
            position: 'relative',
          },
        },
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <MainServices />
        <Introduction />
        <Customers />
        <Favors />
        <Testimonial />
        <News />
        <Footer />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default App
