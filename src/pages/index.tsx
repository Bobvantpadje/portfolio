import { AnimatedWordList } from 'components/AnimatedWordList';
import { useTranslation } from 'react-i18next';
import { AnimatedHeader, LETTER_DELAY_TIME } from 'styles/StyledComponents/Animated/AnimatedHeader';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box bg="primary" width="100%" padding={3}>
      <AnimatedHeader color="text" text={t('home_welcomeMessage')} />
      <AnimatedWordList
        words={[t('home_wordListWordOne'), t('home_wordListWordTwo'), t('home_wordListWordThree')]}
        initialDelay={t('home_welcomeMessage').split(' ').length * LETTER_DELAY_TIME * 1000}
      />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae accusamus soluta officiis quos sunt veritatis nobis veniam ipsa
        voluptatibus cumque, alias ipsam expedita impedit repellat quas aliquam quasi? Quam, esse.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae accusamus soluta officiis quos sunt veritatis nobis veniam ipsa
        voluptatibus cumque, alias ipsam expedita impedit repellat quas aliquam quasi? Quam, esse.
      </Paragraph>
    </Box>
  );
};

export default Home;
