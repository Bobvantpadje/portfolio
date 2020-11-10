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
      width="100%"
      height="100vh"
      position="absolute"
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
      if (prevRoute === routes.about) return { x: '-100%', opacity: 0 };
      if (prevRoute === routes.portfolio) return { x: '-100%', opacity: 0 };
      return { opacity: 0 };
    },
    center: () => ({ x: '0vw', y: '0vh', zIndex: 1, opacity: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  },
  [routes.about]: {
    initial: (prevRoute: string) => {
      if (!prevRoute) return { opacity: 0 };
      return { x: '100%', opacity: 0 };
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

export const ROW_HEIGHT = '6rem';
const GridContainer = styled(MotionBox)`
  /* overflow: auto; */
  -webkit-overflow-scroll: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
GridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: ['1rem auto 1rem', `${ROW_HEIGHT} auto ${ROW_HEIGHT}`],
  gridTemplateRows: `${ROW_HEIGHT} calc(100vh - 12rem) ${ROW_HEIGHT}`
};
