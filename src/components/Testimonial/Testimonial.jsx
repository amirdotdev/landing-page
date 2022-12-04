import * as React from 'react'
import styles from './Testimonial.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TestimonialCard from './TestimonialCard'
import manImage1 from '../../assets/Testimonial/Melika Ghasemi.png'
import manImage2 from '../../assets/Testimonial/Amir Taghavi.png'
import manImage3 from '../../assets/Testimonial/Hamid Khaksar.png'

const Testimonial = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.container}>
        <Stack>
          <Typography className={styles['title']}>
            مشتریان درباره ما چه می گویند؟
          </Typography>
          <Stack className={styles['cards-container']}>
            <TestimonialCard
              name="ملیکا قاسمی"
              jobTitle="مدیر منابع انسانی بیمارستان نیکان"
              comment="با دیجی رفاهی، کارمندان سازمان من رضایت بیشتری از سازمان پیدا کرده اند و نرخ قطع همکاری 12% کاهش یافته است."
              img={manImage1}
              id={'melika ghasemi'}
              animationDelay={0}
            />
            <TestimonialCard
              name="امیر تقوی"
              jobTitle="مدیر عامل ساعی"
              comment="طیف متنوع خدمات دیجی رفاهی، کمک میکند که بودجه رفاهی سازمان به نحو احسن مورد استفاده قرار گیرد."
              img={manImage2}
              id="amir taghavi"
              animationDelay={100}
            />
            <TestimonialCard
              name="حمید خاکسار"
              jobTitle="مدیر عامل تیوان"
              comment="در طی مدت همکاری با دیجی رفاهی، با صرف هزینه کمتر به رضایت بخشی بیشتری در ارائه خدمات رفاهی رسیدیم."
              img={manImage3}
              id="hamid khaksar"
              animationDelay={200}
            />
          </Stack>
        </Stack>
      </Box>
    </StyledEngineProvider>
  )
}

export default Testimonial
