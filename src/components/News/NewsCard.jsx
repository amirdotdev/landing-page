import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import styles from './NewsCard.module.css'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { animated, useSpring } from '@react-spring/web'

const NewsCard = (props) => {
  const [scrollFromTop, setScrollFromTop] = useState(null)
  const myRef = useRef(null)

  const [springs, animation] = useSpring(() => ({
    from: { opacity: 0, y: -50, rotate: 180 },
    config: {
      mass: 4,
      friction: 50,
      tension: 120,
    },
  }))

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollFromTop(document.documentElement.scrollTop)
    })

    if (
      scrollFromTop >= myRef.current.offsetTop - 500 &&
      scrollFromTop <= myRef.current.offsetTop + 200
    ) {
      animation.start({
        to: { opacity: 1, y: 0, rotate: 0 },
      })
    }
    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
    }
  }, [animation, scrollFromTop])

  const AnimatedGrid = animated(Grid)
  return (
    <AnimatedGrid
      item
      className={styles.container}
      xs={9}
      md={3}
      ref={myRef}
      style={{ ...springs }}
    >
      <Box className={styles.card}>
        <CardMedia component="img" src={props.imageSrc} />
        <CardContent className={styles['card-content']}>
          <Typography className={styles.title}>{props.title}</Typography>
          <Typography className={styles.text}>{props.text}</Typography>
        </CardContent>
      </Box>
    </AnimatedGrid>
  )
}

export default NewsCard
