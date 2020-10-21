import styled from '@emotion/styled';
import { HeaderLink } from 'components/utils/Link/HeaderLink';
import { PageGrid } from 'components/utils/PageGrid';
import { useRouteChangeListener } from 'context/historyContext';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { opacity } from 'styled-system';
import { AnimatedHeader, getHeaderAnimationTime } from 'styles/StyledComponents/Animated/AnimatedHeader';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import routes from 'utils/contants/routes';
import { Home } from 'components/pages/home';
export default Home;

// const Home: FC = () => {
//   const { t } = useTranslation();

//   return (
//     <PageGrid.Container bg="primary" route={routes.home}>
//       <PageGrid.Left>
//         <HeaderLink href="portfolio" rotate={-90}>
//           {t('portfolio').toUpperCase()}
//         </HeaderLink>
//       </PageGrid.Left>
//       <PageGrid.Right>
//         <HeaderLink href="about" rotate={90}>
//           {t('about').toUpperCase()}
//         </HeaderLink>
//       </PageGrid.Right>
//       <PageGrid.Center color="white">
//         <CenterContent />
//       </PageGrid.Center>
//       <PageGrid.Bottom>
//         <HeaderLink href="skills">{t('skills').toUpperCase()}</HeaderLink>
//       </PageGrid.Bottom>
//     </PageGrid.Container>
//   );
// };

// export default Home;

// const container = {
//   hidden: { opacity: 0, width: '0%', height: '0%' },
//   show: {
//     opacity: 1,
//     width: '100%',
//     height: '100%',
//     transition: {
//       duration: 1,
//       delayChildren: 1,
//       delay: 0.5
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -500,
//     transition: {
//       duration: 1
//     }
//   }
// };

// const imageVar = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 }
// };

// const width = ['30vw'];
// const size = ['40vw', '40vw', '40vw', '40vw', '30vw'];

// const exitAnimation = (nextRoute: string) => {
//   if (nextRoute === '/skills') return { y: '-20vh' };
//   if (nextRoute === '/about') return { x: '-15vw' };
//   return {};
// };

// const CenterContent: FC = () => {
//   const [nextRoute, setNextRoute] = useState('');
//   useRouteChangeListener(setNextRoute, 'routeChangeStart');
//   return (
//     <MotionBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100%"
//       transition={{ duration: 1 }}
//       exit={exitAnimation}
//       custom={nextRoute}>
//       <Box width={size} height={size} display="flex" justifyContent="center" alignItems="center">
//         <MotionBox
//           bg="secondary"
//           borderRadius="100%"
//           position="relative"
//           variants={container}
//           initial="hidden"
//           animate="show"
//           // exit="exit"
//           // transition={{
//           //   delayChildren: 1,
//           //   duration: 1
//           //   delay: 0.5
//           // }}
//         >
//           <SkillIcons />
//           <AboutText />
//           <MotionBox
//             variants={imageVar}
//             transition={{ duration: 1 }}
//             width="100%"
//             height="100%"
//             overflow="hidden"
//             borderRadius="100%"
//             display="flex"
//             justifyContent="center"
//             alignItems="flex-end">
//             <img src="/images/self.png" alt="my image" style={{ height: '90%' }} />
//           </MotionBox>
//         </MotionBox>
//       </Box>
//     </MotionBox>
//   );
// };

// const itemContainer = {
//   hidden: {
//     opacity: 1
//   },
//   show: {
//     opacity: 1
//   }
// };
// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 }
// };

// const SkillIcons = () => {
//   return (
//     <MotionBox
//       variants={itemContainer}
//       transition={{
//         staggerChildren: 0.5,
//         duration: 1
//       }}
//       right="-25%"
//       width="25%"
//       height="100%"
//       position="absolute"
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-around">
//       <SkillCircle />
//       <SkillCircle ml="30%" />
//       <SkillCircle />
//     </MotionBox>
//   );
// };

// const SkillCircle = styled(MotionBox)``;
// SkillCircle.defaultProps = {
//   variants: item,
//   transition: { duration: 1 },
//   bg: 'secondary',
//   width: '100%',
//   pt: '100%',
//   // width: ['100px', '100px', '100px', '160px'],
//   // height: ['100px', '100px', '100px', '160px'],
//   borderRadius: '100%'
// };

// // const containerVariant = {

// // }

// const AboutText = () => {
//   const { t } = useTranslation();
//   const delay = 1.5;
//   return (
//     <Box position="absolute" left="-25%" top="20%" width="60%">
//       <Spacing>
//         <AnimatedHeader variant="h3" text={t('home_welcomeMessage')} initialDelay={1.5} />
//       </Spacing>
//       <Spacing>
//         <AnimatedHeader variant="xl" text={t('name')} initialDelay={delay + getHeaderAnimationTime(t('home_welcomeMessage'))} />
//       </Spacing>
//       <Spacing>
//         <AnimatedHeader
//           variant="h3"
//           text={t('home_jobTitle')}
//           initialDelay={delay + getHeaderAnimationTime(t('home_welcomeMessage')) + getHeaderAnimationTime(t('home_welcomeMessage'))}
//         />
//       </Spacing>
//     </Box>
//   );
// };

// const getWordCount = (text: string) => text.split(' ').length;
// // const getFullAnimationTime

// const Spacing = styled(Box)``;
// Spacing.defaultProps = {
//   mt: [3]
// };
