import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import styles from './Customers.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import logoImages from '../../assets/Customers/logos.png'
import { animated, useSpring } from '@react-spring/web'

const Customers = () => {
  const [scrollFromTop, setScrollFromTop] = useState(null)
  const myRef = useRef(null)

  const [springs, animation] = useSpring(() => ({
    from: { scale: 2, opacity: 0 },
    config: {
      mass: 4,
      friction: 80,
      tension: 120,
    },
  }))

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollFromTop(document.documentElement.scrollTop)
    })

    if (
      scrollFromTop >= myRef.current.offsetTop - 500 &&
      scrollFromTop <= myRef.current.offsetTop + 700
    ) {
      animation.start({
        to: { opacity: 1, scale: 1 },
      })
    }
    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
    }
  }, [animation, scrollFromTop])
  const AnimatedBox = animated(Box)
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.container}>
        <Typography className={styles.title}>
          سازمان‌هایی که همکاری با دیجی رفاهی را انتخاب کرده‌اند
        </Typography>
        <AnimatedBox
          className={styles['logos-container']}
          ref={myRef}
          style={{ ...springs }}
        >
          <img
            src={logoImages}
            alt="customers logos"
            className={styles['logos']}
          />
        </AnimatedBox>
      </Box>
    </StyledEngineProvider>
  )
}

export default Customers
