import * as React from 'react'
import styles from './News.module.css'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import NewsCard from './NewsCard'
import newsImage1 from '../../assets/news/news-1.png'
import newsImage2 from '../../assets/news/news-2.png'
import newsImage3 from '../../assets/news/news-3.png'

const news = [
  {
    title: 'آخرین خبر شماره یک',
    image: newsImage1,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
  {
    title: 'آخرین خبر شماره دو',
    image: newsImage2,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
  {
    title: 'آخرین خبر شماره سه',
    image: newsImage3,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
]

const NewsCards = news.map((card, index) => {
  return (
    <NewsCard
      imageSrc={card.image}
      title={card.title}
      text={card.content}
      key={index}
    />
  )
})
const News = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer>
        <Box className={styles.container}>
          <Box className={styles['title-container']}>
            <Typography className={styles.title}>آخرین اخبار</Typography>
          </Box>
          <Grid container className={styles['news-container']}>
            {NewsCards}
          </Grid>
        </Box>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default News
