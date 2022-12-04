import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import styles from './TestimonialCard.module.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { animated, useSpring } from '@react-spring/web'

const TestimonialCard = (props) => {
  const [scrollTop, setScrollTop] = useState(null)
  const myRef = useRef(null)

  const AnimatedCard = animated(Box)

  const [springs, api] = useSpring(() => {
    return {
      from: { x: -60, opacity: 0 },
      config: {
        mass: 4,
        friction: 80,
        tension: 150,
      },
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(document.documentElement.scrollTop)
    })

    if (
      scrollTop >= myRef.current.offsetTop - 600 &&
      scrollTop <= myRef.current.offsetTop + 100
    ) {
      api.start({
        to: { x: 0, opacity: 1 },
        delay: props.animationDelay,
      })
    }

    return () => {
      window.removeEventListener('scroll', () => console.log('removing event'))
      // api.stop()
    }
  }, [api, scrollTop, props.animationDelay])

  return (
    <AnimatedCard
      className={styles.container}
      ref={myRef}
      id={props.id}
      style={{ ...springs }}
    >
      <Avatar alt={props.name} src={props.img} className={styles.avatar} />
      <Box className={styles['card-content']}>
        <Typography className={styles.name}>{props.name}</Typography>
        <Typography className={styles['job-title']}>
          {props.jobTitle}
        </Typography>
        <Typography className={styles['comment']}>{props.comment}</Typography>
      </Box>
    </AnimatedCard>
  )
}

export default TestimonialCard
