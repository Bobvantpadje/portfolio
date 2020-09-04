import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Button } from 'styles/StyledComponents/Input/Button';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { AnimatedHeader, LETTER_DELAY_TIME } from 'styles/StyledComponents/Animated/AnimatedHeader';
import { useState, useEffect } from 'react';
import { AnimatedWordList } from 'components/AnimatedWordList';

const helloText = "Hi, i'm Thomas Koster.";

const Home: React.FC = () => {
  return (
    <Box bg="primary" width="100%" minHeight="100vh" padding={3}>
      <AnimatedHeader color="text" text={helloText} />
      <AnimatedWordList
        words={['User experience designer', 'User interaction designer', 'Music enthusiast']}
        initialDelay={helloText.split(' ').length * LETTER_DELAY_TIME * 1000}
      />
    </Box>
  );
};

export default Home;
