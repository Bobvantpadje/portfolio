import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Button } from 'styles/StyledComponents/Input/Button';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { AnimatedTitle } from 'styles/StyledComponents/Animated/Title';

const Home: React.FC = () => {
  return (
    <Box bg="primary" width="100%" minHeight="100vh" padding="2rem">
      <Header initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Dit is de header 1
      </Header>
      <AnimatedHeader text="dit is een test" />
    </Box>
  );
};

export default Home;

interface IAnimatedHeaderProps {
  text: string;
  animationType?: 'per-word';
}

const splitArrayPerWord = (text: string) => text.split(' ');
const createAnimatedWord = (word: string, index: number) => {
  const wordSpacing = index === 0 ? '' : ' ';
  const delay = index * 0.2;
  return (
    <Header
      whiteSpace="pre"
      key={index}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      display="inline-block">
      {wordSpacing}
      {word}
    </Header>
  );
};

const AnimatedHeader: React.FC<IAnimatedHeaderProps> = ({ text, animationType = 'per-word' }) => {
  if (animationType === 'per-word') {
    const wordArray = splitArrayPerWord(text).map(createAnimatedWord);
    return <>{wordArray}</>;
  }
  return <Header>{text}</Header>;
};
