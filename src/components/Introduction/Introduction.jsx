import * as React from 'react'
import styles from './Introduction.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import CardMedia from '@mui/material/CardMedia'
import playImage from '../../assets/Interduction/play.png'
import manImage from '../../assets/Interduction/man.png'
import standingManImage from '../../assets/Interduction/standing-man.png'

const Introduction = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer>
        <Box className={styles.container}>
          <Grid container className={styles['grid-container']}>
            <Grid item md={12} lg={6}>
              <Typography component="h2" className={styles.title}>
                دیجی رفاهی را بیشتر بشناسید
              </Typography>
            </Grid>
            <Box>
              <Grid item md={12} lg={6} className={styles['text-container']}>
                <Typography className={styles.text} paragraph>
                  دیجی‌رفاهی یک جعبه ابزار مدرن برای مدیران منابع انسانی است که
                  با ثبت‌نام در این سرویس،می‌توانید بسته‌های مختلف خدمات رفاهی
                  را به صورتی کارآمد و منظم برای هر یک از نیروهای خود طراحی و
                  تامین کنید.این بسته‌ها با توجه به نوع سازمان، بودجه و البته
                  نیازهای ویژه کارمندان شما طراحی می‌شوند تا رضایت آن‌ها را از
                  محیط کارشان بالا ببرند.
                </Typography>
              </Grid>
              <Box className={styles['standing-man-img-container']}>
                <img src={standingManImage} alt="standing-man" />
              </Box>
            </Box>

            {/* <Grid item xs>
              <Box className={styles['video-container']}>
                <img src={playImage} alt="play button" />
              </Box>
            </Grid> */}
            {/* <Grid item>
              <Box className={styles['standing-man-img-container']}>
                <img src={standingManImage} alt="standing-man" />
              </Box>
            </Grid> */}
          </Grid>
          <Box className={styles['video-container']}>
            <img src={playImage} alt="play button" />
          </Box>
        </Box>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default Introduction
