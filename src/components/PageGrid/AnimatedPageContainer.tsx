import styled from '@emotion/styled';
import { IBoxProps } from '@types';
import { useHistoryContext } from 'context/historyContext';
import { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import routes from 'utils/contants/routes';

export const AnimatedPageContainer: FC<IBoxProps & { route: keyof typeof routes }> = ({ children, route, ...args }) => {
  const history = useHistoryContext();
  const prevRoute = history[history.length - 1];

  return (
    <GridContainer
      custom={prevRoute}
      variants={variants[route]}
      width="100vw"
      height="100vh"
      position="fixed"
      top={0}
      transition={{ duration: 1 }}
      initial="initial"
      animate="center"
      exit="exit"
      {...args}>
      {children}
    </GridContainer>
  );
};

const variants = {
  [routes.home]: {
    initial: (prevRoute: string) => {
      if (prevRoute === routes.skills) return { y: '-100vh', opacity: 0 };
      if (prevRoute === routes.about) return { x: '-100vw', opacity: 0 };
      if (prevRoute === routes.portfolio) return { x: '-100vw', opacity: 0 };
      return { opacity: 0 };
    },
    center: () => ({ x: '0vw', y: '0vh', zIndex: 1, opacity: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  },
  [routes.about]: {
    initial: (prevRoute: string) => {
      if (!prevRoute) return { opacity: 0 };
      return { x: '100vw', opacity: 0 };
    },
    center: () => ({ x: '0vw', zIndex: 1, opacity: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  },
  [routes.skills]: {
    initial: (prevRoute: string) => {
      if (!prevRoute) return { opacity: 0 };
      return { y: '100vh', opacity: 0 };
    },
    center: () => ({ y: '0vw', zIndex: 1, opacity: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  }
};

const GridContainer = styled(MotionBox)``;
GridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: '6rem auto 6rem',
  gridTemplateRows: '6rem calc(100vh - 12rem) 6rem'
};