import styled from '@emotion/styled';
import { AnimatedWordList } from 'components/AnimatedWordList';
import { useTranslation } from 'react-i18next';
import { AnimatedHeader, LETTER_DELAY_TIME } from 'styles/StyledComponents/Animated/AnimatedHeader';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { motion, AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { useRouter } from 'next/dist/client/router';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const Router = useRouter();

  return (
    <GridContainer
      // key={Router.route}
      bg="primary"
      width="100%"
      initial={{ x: '100vw' }}
      animate={{ x: '0vw' }}
      exit={{ x: '100vw' }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      position="absolute"
      top={0}>
      <Box bg="red" gridColumn="1 / span 3" />
      <Box bg="yellow" gridRow="2 / span 3" gridColumn="1" />
      <Box bg="yellow" gridRow="2 / span 3" gridColumn="3" />
      <Box bg="yellow" gridRow="3" gridColumn="1 / span 3" />
      <Box bg="blue" gridRow="2" gridColumn="2">
        <Link href="about">about</Link>
        {/* <MyComponent isVisible={visible} />
        <button onClick={() => setVisible(!visible)}>toggle</button> */}
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

export const MyComponent: FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <div>
        <motion.div
          style={{ height: 100, width: 100, background: 'purple' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>
    )}
  </AnimatePresence>
);
