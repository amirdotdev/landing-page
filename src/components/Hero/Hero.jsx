import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { animated, useSpring } from '@react-spring/web'
import styles from './Hero.module.css'
import heroImage from '../../assets/Hero/hero.png'
import backgroundCircle from '../../assets/Hero/circle.png'

const Hero = () => {
  const [scrollTop, setScrollTop] = useState(null)

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, scale: 1.8 },
    config: {
      mass: 4,
      friction: 80,
      tension: 120,
    },
  }))

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(document.documentElement.scrollTop)
      if (scrollTop <= document.documentElement.clientHeight / 2) {
        api.start({
          to: { opacity: 1, scale: 1 },
        })
      }
    })

    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
      // api.stop()
    }
  }, [api, scrollTop])

  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.container}>
        <Grid container className={styles['grid-container']}>
          <Grid item md={6} xs={12}>
            <Stack className={styles['content-container']}>
              <Box className={styles.title}>
                برنامه های رفاهی متنوع، یکپارچه با نیازهای سازمان شما
              </Box>
              <Stack className={styles.content}>
                <Typography className={styles.subtitle}>
                  ما تامین و ارائه خدمات رفاهی در سطح سازمان شما را با تعهد به
                  افزایش رضایت کارکنان، از همیشه ساده تر می کنیم
                </Typography>
                <Stack className={styles['button-container']}>
                  <Button
                    className={`${styles.button} ${styles['button-grey']}`}
                  >
                    <Typography className={styles['button-text']}>
                      کارمند هستم
                    </Typography>
                  </Button>
                  <Button
                    className={`${styles.button} ${styles['button-gold']}`}
                  >
                    <Typography className={styles['button-text']}>
                      کارفرما هستم
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md xs={12} mt={4}>
            <Box className={styles['image-container']}>
              {' '}
              <animated.img
                src={heroImage}
                alt="hero"
                className={styles['img']}
                style={{ ...springs }}
              />
              <animated.div
                className={styles['circle-container']}
                style={{ ...springs }}
              >
                <img
                  src={backgroundCircle}
                  alt="background circle"
                  className={`${styles.img} ${styles['circle-img']}`}
                />
              </animated.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledEngineProvider>
  )
}

export default Hero
