import * as React from 'react'
import styles from './Favors.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import image from '../../assets/favors/image.png'
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState, useRef } from 'react'

const Favors = () => {
  const [scrollFromTop, setScrollFromTop] = useState(null)
  const myRef = useRef(null)
  const [springs, animation] = useSpring(() => ({
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
      scrollFromTop >= myRef.current.offsetTop - 300 &&
      scrollFromTop <= myRef.current.offsetTop + 700
    ) {
      animation.start({
        to: { x: 0, opacity: 1 },
      })
    }

    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
    }
  }, [animation, scrollFromTop])

  const AnimatedStack = animated(Stack)

  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer>
        <Grid
          container
          direction="row-reverse"
          className={styles['grid-container']}
        >
          <Grid item xs={12} md={6}>
            <AnimatedStack
              style={{ ...springs }}
              className={styles['content_container']}
              ref={myRef}
            >
              <Box>
                <Typography className={styles.title}>
                  ما به سازمان ها چه کمکی می کنیم؟
                </Typography>
                <ul className={styles.list}>
                  <li>
                    با چند کلیک فرایند طراحی خدمات را به زبان سازمان شما پیاده
                    سازی می‌کنیم
                  </li>
                  <li>
                    {' '}
                    اثربخش‌ترین برنامه‌‌های رفاهی را برای کارمندان شما پیشنهاد
                    می‌کنیم
                  </li>
                  <li>
                    {' '}
                    با نظرسنجی از پرسنل، نزدیک‌ترین گزینه‌ها به نیازهایشان را
                    می‌کنیم
                  </li>
                  <li>
                    {' '}
                    رضایت کارمندان شما را با داشبوردهای گزارشی به اطلاعتان
                    می‌رسانیم
                  </li>
                </ul>
              </Box>
              <Box>
                <Typography className={styles.title}>
                  ما به کارمندان چه کمکی می کنیم؟
                </Typography>
                <ul className={styles.list}>
                  <li>
                    یک داشبورد شخصی ارائه می‌دهیم که در آن خدمات رفاهی برای
                    انتخاب وجود دارند
                  </li>
                  <li>
                    خدمات رفاهی گروهی و فردی معرفی می‌کنیم تا با توجه به سلیقه و
                    نیاز انتخاب کنند
                  </li>
                  <li>
                    برنامه تفریحی و رفاهی مختلفی برای خانواده های همکاران ارائه
                    می‌کنیم
                  </li>
                </ul>
              </Box>
            </AnimatedStack>
          </Grid>
          <Grid xs={12} md item>
            <Box className={styles['man-image-container']}>
              <img src={image} alt="office" className={styles['image']} />
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default Favors
