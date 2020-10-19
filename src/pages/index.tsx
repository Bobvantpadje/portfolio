import styled from '@emotion/styled';
import { AnimatedPageContainer } from 'components/PageGrid/AnimatedPageContainer';
import { PageGrid } from 'components/PageGrid';
import { Link } from 'components/Link';
import { useHistoryContext } from 'context/historyContext';
import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';
import routes from 'utils/contants/routes';

const Home: React.FC = () => {
  // const { t } = useTranslation();
  // const [visible, setVisible] = useState(false);
  // const Router = useRouter();
  // const history = useHistoryContext();
  // const prevRoute = history[history.length - 1];
  return (
    <PageGrid.Container bg="red" route={routes.home}>
      <Box bg="red" gridColumn="1 / span 3" />
      <PageGrid.Left bg="green"></PageGrid.Left>
      <PageGrid.Right bg="yellow">
        <Link href="about">about</Link>
      </PageGrid.Right>
      <PageGrid.Bottom bg="pink">
        <Link href="skills">skills</Link>
      </PageGrid.Bottom>
      <PageGrid.Center bg="blue" color="white" gridRow="2" gridColumn="2">
        Home
      </PageGrid.Center>

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
    </PageGrid.Container>
  );
};

// const GridContainer = styled(MotionBox)``;
// GridContainer.defaultProps = {
//   display: 'grid',
//   gridTemplateColumns: '100px auto 100px',
//   gridTemplateRows: '100px calc(100vh - 200px) 100px'
// };

export default Home;
