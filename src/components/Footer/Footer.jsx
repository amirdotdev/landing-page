import * as React from 'react'
import styles from './Footer.module.css'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import textLogoImage from '../../assets/Footer/text-logo.png'
import logoImage from '../../assets/Footer/logo.png'
import fbIcon from '../../assets/Footer/facebook.png'
import twIcon from '../../assets/Footer/twitter.png'
import lkIcon from '../../assets/Footer/linkedin.png'
import inIcon from '../../assets/Footer/instagram.png'

const {
  container,
  logo_container,
  logo,
  text_logo_container,
  text_logo,
  content,
  about_us_container,
  title,
  about_us_title,
  about_us_text,
  links_container,
  link,
  address_container,
  address,
  street,
  icons_container,
  icon,
} = styles
const Footer = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={container}>
        <CustomContainer>
          <Grid container className={logo_container}>
            <Grid item className={logo_container}>
              <img src={textLogoImage} className={text_logo} alt="text logo" />
            </Grid>
            <Grid item className={text_logo_container}>
              <img src={logoImage} className={logo} alt="logo D" />
            </Grid>
          </Grid>
          <Grid container className={content}>
            <Grid item className={about_us_container} xs={12} md={4}>
              <Typography className={`${title} ${about_us_title}`}>
                درباره ما
              </Typography>
              <Typography className={about_us_text}>
                {' '}
                شرکت توسعه تجارت پایدار نوآفرین (ثبت 546468) ، از سال 1398 با
                تمرکز بر تامین کالا و خدمات، بعنوان بازوی ارائه دهده خدمات رفاهی
                و فروشگاه سازمانی در حال خدمت رسانی به شرکتها و سازمان های مختلف
                می باشد. تامین سریع و با کیفیت کالا و خدمات، درکنار تفکر طراحی
                نوآورانه خدمات، را باید خط مشی کلیدی شرکت توسعه تجارت پایدار
                نوآفرین دانست
              </Typography>
            </Grid>
            <Grid item className={links_container} xs={12} sm={6} md>
              <Typography className={title}>لینک ها مفید</Typography>
              <Typography className={link}>دریافت دمو</Typography>
              <Typography className={link}>خدمات</Typography>
              <Typography className={link}>اخبار</Typography>
              <Typography className={link}>
                شرایط همکاری با تامین‌کنندگان
              </Typography>
            </Grid>
            <Grid item className={address_container} xs={12} sm={6} md>
              <Typography className={title}>تماس با ما</Typography>
              <Typography className={`${address} ${street}`}>
                نشانی ما : تهران - خیابان فاطمی غربی - تقاطع سیندخت شماره 232
              </Typography>
              <Typography className={address}>
                {' '}
                شماره تماس :‌ 66917905-021
              </Typography>
              <Typography className={address}>
                {' '}
                info@digirefahi.com : آدرس ایمیل
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={icons_container}>
            <Grid item className={icon}>
              <img src={inIcon} alt="instagram icon" />
            </Grid>
            <Grid item className={icon}>
              <img src={lkIcon} alt="linkedin icon" />
            </Grid>
            <Grid item className={icon}>
              <img src={twIcon} alt="twitter icon" />
            </Grid>
            <Grid item className={icon}>
              <img src={fbIcon} alt="facebook icon" />
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
    </StyledEngineProvider>
  )
}

export default Footer
