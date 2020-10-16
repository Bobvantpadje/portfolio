import { AnimatedImage } from 'components/AnimatedImage';
import { motion, useElementScroll, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';

const loremText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque.';

const About: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const Router = useRouter();

  return (
    // <>
    <MotionBox
      // key={Router.route}
      width="100vw"
      height="100vh"
      bg="green"
      transition={{ duration: 1.5, ease: 'easeOut' }}
      initial={{ x: '-100vw' }}
      animate={{ x: '0vw' }}
      exit={{ x: '-100vw' }}
      position="absolute"
      top={0}>
      <Link href="/">home</Link>
    </MotionBox>
    // </>
  );

  // return (
  //   <Box ref={ref}>
  //     <svg className="progress-icon" viewBox="0 0 60 60" style={{ position: 'fixed', width: 100, height: 100 }}>
  //       <motion.path
  //         fill="none"
  //         strokeWidth="5"
  //         stroke="white"
  //         strokeDasharray="0 1"
  //         d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
  //         style={{
  //           pathLength: scrollYProgress,
  //           rotate: 90,
  //           translateX: 5,
  //           translateY: 5,
  //           scaleX: -1 // Reverse direction of line animation
  //         }}
  //       />
  //     </svg>
  //     <Header>About</Header>
  //     <AboutItem title="title1" content={loremText} />
  //     <AboutItem title="title2" content={loremText} />
  //     <AboutItem title="title3" content={loremText} />
  //   </Box>
  // );
};

export default About;

const AboutItem: FC<{ title: string; content: string }> = React.memo(({ title, content }) => {
  return (
    <Box display="flex">
      <Box width="50%" display="flex" justifyContent="center" alignItems="center">
        <AnimatedImage />
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
});
