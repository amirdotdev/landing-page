import * as React from 'react'
import styles from './Introduction.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import playImage from '../../assets/Interduction/play.png'
import standingManImage from '../../assets/Interduction/standing-man.png'
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState, useRef } from 'react'

const Introduction = () => {
  const [scrollFromTop, setScrollFromTop] = useState(null)
  const myRef = useRef(null)

  const [springs, animation] = useSpring(() => ({
    from: { x: -100, opacity: 0 },
    config: {
      mass: 4,
      friction: 80,
      tension: 120,
    },
  }))

  const [titleSprings, titleAnimation] = useSpring(() => ({
    from: { x: 100, opacity: 0 },
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
      scrollFromTop >= myRef.current.offsetTop - 200 &&
      scrollFromTop <= myRef.current.offsetTop + 700
    ) {
      animation.start({
        to: { x: 0, opacity: 1 },
      })
      titleAnimation.start({
        to: { x: 0, opacity: 1 },
      })
    }
    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
    }
  }, [animation, titleAnimation, scrollFromTop])

  const AnimatedGrid = animated(Grid)
  const AnimatedBox = animated(Box)

  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer>
        <Box className={styles.container} ref={myRef}>
          <Grid container className={styles['grid-container']}>
            <AnimatedGrid item md={12} lg={6} style={{ ...titleSprings }}>
              <Typography component="h2" className={styles.title}>
                دیجی رفاهی را بیشتر بشناسید
              </Typography>
            </AnimatedGrid>
            <Box>
              <AnimatedGrid
                item
                md={12}
                lg={6}
                className={styles['text-container']}
                style={{ ...springs }}
              >
                <Typography className={styles.text} paragraph>
                  دیجی‌رفاهی یک جعبه ابزار مدرن برای مدیران منابع انسانی است که
                  با ثبت‌نام در این سرویس،می‌توانید بسته‌های مختلف خدمات رفاهی
                  را به صورتی کارآمد و منظم برای هر یک از نیروهای خود طراحی و
                  تامین کنید.این بسته‌ها با توجه به نوع سازمان، بودجه و البته
                  نیازهای ویژه کارمندان شما طراحی می‌شوند تا رضایت آن‌ها را از
                  محیط کارشان بالا ببرند
                </Typography>
              </AnimatedGrid>
              <Box className={styles['standing-man-img-container']}>
                <img src={standingManImage} alt="standing-man" />
              </Box>
            </Box>
          </Grid>
          <AnimatedBox
            className={styles['video-container']}
            style={{ ...springs }}
          >
            <img src={playImage} alt="play button" />
          </AnimatedBox>
        </Box>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default Introduction
