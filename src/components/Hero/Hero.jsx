import * as React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import styles from './Hero.module.css'
import heroImage from '../../assets/Hero/hero.png'
import backgroundCircle from '../../assets/Hero/circle.png'

const Hero = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.container}>
        <Grid container className={styles['grid-container']}>
          <Grid item md={6} xs={12}>
            <Stack className={styles['content-container']}>
              <Typography className={styles.title}>
                برنامه های رفاهی متنوع، یکپارچه با نیازهای سازمان شما
              </Typography>
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
              <img src={heroImage} alt="hero" className={styles['img']} />
              <Box className={styles['circle-container']}>
                <img
                  src={backgroundCircle}
                  alt="background circle"
                  className={`${styles.img} ${styles['circle-img']}`}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledEngineProvider>
  )
}

export default Hero
