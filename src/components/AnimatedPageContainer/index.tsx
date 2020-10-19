import { IBoxProps } from '@types';
import { useHistoryContext } from 'context/historyContext';
import { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import routes from 'utils/contants/routes';

export const AnimatedPageContainer: FC<IBoxProps & { route: keyof typeof routes }> = ({ children, route, ...args }) => {
  const history = useHistoryContext();
  const prevRoute = history[history.length - 1];
  //   console.log('route', route, 'variant', variants[route]);
  return (
    <MotionBox
      custom={prevRoute}
      variants={variants[route]}
      width="100vw"
      height="100vh"
      position="fixed"
      top={0}
      transition={{ duration: 1.5, ease: 'easeIn' }}
      initial="initial"
      animate="center"
      exit="exit"
      {...args}>
      {children}
    </MotionBox>
  );
};

const variants = {
  [routes.home]: {
    // initial: () => ({ opacity: 0 }),
    initial: (prevRoute: string) => {
      console.log({ prevRoute });
      if (prevRoute === routes.skills) return { y: '-100vh', opacity: 1 };
      if (prevRoute === routes.about) return { x: '100vw', opacity: 1 };
      if (prevRoute === routes.portfolio) return { x: '-100vw', opacity: 1 };
      return { opacity: 0 };
    },
    center: () => ({ x: '0vw', y: '0vh', zIndex: 1, opacity: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  },
  [routes.about]: {
    initial: () => ({ x: '-100vw' }),
    center: () => ({ x: '0vw', zIndex: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  },
  [routes.skills]: {
    initial: () => ({ y: '100vh' }),
    center: () => ({ y: '0vw', zIndex: 1 }),
    exit: () => ({ opacity: 0, zIndex: 0 })
  }

  //   skills:
};
