import { motion, useElementScroll, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';

const loremText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque.';

const About: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useViewportScroll();

  return (
    <Box ref={ref}>
      <svg className="progress-icon" viewBox="0 0 60 60" style={{ position: 'fixed', width: 100, height: 100 }}>
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength: scrollYProgress,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
      </svg>
      <Header>About</Header>
      <AboutItem title="title1" content={loremText} />
      <AboutItem title="title2" content={loremText} />
      <AboutItem title="title3" content={loremText} />
    </Box>
  );
};

export default About;

const AboutItem: FC<{ title: string; content: string }> = ({ title, content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    scrollY.onChange((y) => {
      if (!ref.current || !boxRef.current) return;
      const isInView =
        y + window.innerHeight >= boxRef.current?.offsetTop + boxRef.current?.clientHeight &&
        y <= boxRef.current.offsetTop + boxRef.current.offsetHeight - 100;
      if (isInView && !show) {
        setShow(true);
      }
      if (!isInView && show) {
        setShow(false);
      }
    });
  }, [scrollY, show]);

  const variants = {
    show: {
      opacity: 1,
      y: 0
    },
    hide: {
      opacity: 0,
      y: 100
    }
  };

  return (
    <Box display="flex" ref={ref}>
      <Box width="50%" display="flex" justifyContent="center" alignItems="center">
        <MotionBox
          ref={boxRef}
          initial={false}
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={variants}
          animate={show ? 'show' : 'hide'}
          bg="complementary"
          opacity={0}
          width={300}
          height={300}
        />
      </Box>
      <Box width="50%">
        <Header variant="h1" mb={5}>
          {title}
        </Header>
        <Paragraph color="text" fontSize={5} lineHeight={5} mb={5}>
          {content}
        </Paragraph>
      </Box>
    </Box>
  );
};
