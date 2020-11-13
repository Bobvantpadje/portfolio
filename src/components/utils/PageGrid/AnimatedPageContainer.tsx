import styled from '@emotion/styled';
import { IBoxProps } from '@types';
import { useHistoryContext } from 'context/historyContext';
import { FC, useEffect, useState } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import routes from 'utils/contants/routes';
import { useViewHeight } from 'utils/hooks/useViewHeight';
import Div100vh from 'react-div-100vh';

export const AnimatedPageContainer: FC<IBoxProps & { route: keyof typeof routes }> = ({ children, route, ...args }) => {
  const history = useHistoryContext();
  const prevRoute = history[history.length - 1];

  return (
    <Div100vh>
      <GridContainer
        custom={prevRoute}
        // variants={variants[route]}
        variants={{
          initial: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 }
        }}
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        transition={{ duration: 1 }}
        initial="initial"
        animate="center"
        exit="exit"
        {...args}>
        {children}
      </GridContainer>
    </Div100vh>
  );
};

export const ROW_HEIGHT = '6rem';
const GridContainer = styled(MotionBox)``;
GridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: ['1rem auto 1rem', `${ROW_HEIGHT} auto ${ROW_HEIGHT}`],
  gridTemplateRows: `${ROW_HEIGHT} calc(100% - 12rem) ${ROW_HEIGHT}`
};

// const variants = {
//   [routes.home]: {
//     initial: (prevRoute: string) => {
//       if (prevRoute === routes.skills) return { y: '-100vh', opacity: 0 };
//       if (prevRoute === routes.about) return { x: '-100%', opacity: 0 };
//       if (prevRoute === routes.portfolio) return { x: '-100%', opacity: 0 };
//       return { opacity: 0 };
//     },
//     center: () => ({ x: '0vw', y: '0vh', zIndex: 1, opacity: 1 }),
//     exit: () => ({ opacity: 0, x: '0vw', y: '0vh' })
//   },
//   [routes.about]: {
//     initial: (prevRoute: string) => {
//       if (!prevRoute) return { opacity: 0 };
//       return { x: '100%', opacity: 0 };
//     },
//     center: () => ({ x: '0vw', zIndex: 1, opacity: 1 }),
//     exit: () => ({ opacity: 0, zIndex: 0 })
//   },
//   [routes.skills]: {
//     initial: (prevRoute: string) => {
//       if (!prevRoute) return { opacity: 0 };
//       return { y: '100vh', opacity: 0 };
//     },
//     center: () => ({ y: '0vw', zIndex: 1, opacity: 1 }),
//     exit: () => ({ opacity: 0, zIndex: 0 })
//   }
// };
