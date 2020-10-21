import { Header, IHeaderProps } from '../Text/Header';
import { Box } from '../Box';

interface IAnimatedHeaderProps {
  text: string;
  animationType?: 'per-word';
  initialDelay?: number;
}

export const AnimatedHeader: React.FC<IAnimatedHeaderProps & IHeaderProps> = ({
  text,
  animationType = 'per-word',
  initialDelay = 0,
  ...styling
}) => {
  if (animationType === 'per-word') {
    const wordArray = splitArrayPerWord(text).map(createAnimatedWord(styling, initialDelay));
    return <Box>{wordArray}</Box>;
  }
  return <Box>{text}</Box>;
};

export const LETTER_DELAY_TIME = 0.1;
const splitArrayPerWord = (text: string) => text.split(' ');
const createAnimatedWord = (stylingProps: any, initialDelay: number) => (word: string, index: number) => {
  const delay = index * LETTER_DELAY_TIME + initialDelay;
  return (
    <Header
      {...stylingProps}
      whiteSpace="pre"
      key={index}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      display="inline-block">
      {word}{' '}
    </Header>
  );
};

const getWordCount = (text: string) => text.split(' ').length;
export const getHeaderAnimationTime = (text: string) => getWordCount(text) * LETTER_DELAY_TIME;
