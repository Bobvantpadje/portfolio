import styled from '@emotion/styled';
import { Link } from 'components/Link';
import { useHistoryContext } from 'context/historyContext';
import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';

const variants = {
  // enter: (direction: string) => ({
  //   x: direction !== 'left' ? '-100vw' : '100vw',
  //   opacity: 1
  // }),
  enter: (route: string) => {
    if (route === 'skills') return { y: '-100vh', opacity: 1 };
    return { x: '-100vw', opacity: 1 };
  },
  center: (direction: string) => ({
    x: '0vw',
    y: '0vh',
    zIndex: 1,
    opacity: 1
    // background: direction !== 'left' ? 'red' : 'blue'
  }),
  exit: (direction: string) => ({
    // x: direction !== 'left' ? '-100vw' : '100vw',
    opacity: 0.3,
    zIndex: 0
  })
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const Router = useRouter();
  const history = useHistoryContext();

  return (
    <GridContainer
      bg="primary"
      width="100%"
      custom={Router.route}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 1.5, ease: 'easeOut' }}
      position="fixed"
      top={0}>
      {/* <Box bg="red" gridColumn="1 / span 3" />
      <Box bg="yellow" gridRow="2 / span 3" gridColumn="1" />
      <Box bg="yellow" gridRow="2 / span 3" gridColumn="3" />
      <Box bg="yellow" gridRow="3" gridColumn="1 / span 3" /> */}
      <Box bg="blue" gridRow="2" gridColumn="2">
        <Link href="about">about</Link>
        <Link href="skills">skills</Link>
        <span>{JSON.stringify(history)}</span>
      </Box>

      {/* <AnimatedHeader color="text" text={t('home_welcomeMessage')} /> */}
      {/* <AnimatedWordList
        words={[t('home_wordListWordOne'), t('home_wordListWordTwo'), t('home_wordListWordThree')]}
        initialDelay={t('home_welcomeMessage').split(' ').length * LETTER_DELAY_TIME * 1000}
      /> */}
      {/* <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae accusamus soluta officiis quos sunt veritatis nobis veniam ipsa
        voluptatibus cumque, alias ipsam expedita impedit repellat quas aliquam quasi? Quam, esse.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae accusamus soluta officiis quos sunt veritatis nobis veniam ipsa
        voluptatibus cumque, alias ipsam expedita impedit repellat quas aliquam quasi? Quam, esse.
      </Paragraph> */}
    </GridContainer>
  );
};

const GridContainer = styled(MotionBox)``;
GridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: '100px auto 100px',
  gridTemplateRows: '100px calc(100vh - 200px) 100px'
};

export default Home;
