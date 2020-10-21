import { useViewportScroll, Variant } from 'framer-motion';
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { IBoxProps } from 'styles/StyledComponents/Box';

interface IAnimatedImageProps {
  variants?: {
    show: Variant;
    hide: Variant;
  };
}

const defaultVariants = {
  show: {
    opacity: 1,
    y: 0
  },
  hide: {
    opacity: 0,
    y: 100
  }
};

export const AnimatedImage: FC<IAnimatedImageProps & IBoxProps> = ({ variants = defaultVariants, ...rest }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    scrollY.onChange(showItemIfInView(setShow, boxRef));
  }, [scrollY]);

  useEffect(() => {
    showItemIfInView(setShow, boxRef)(window.scrollY);
  }, []);

  return (
    <MotionBox
      ref={boxRef}
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 1, ease: 'easeOut' }}
      initial={false}
      variants={variants}
      opacity={0}
      bg="complementary"
      width={300}
      height={300}
      top={5}
      position="sticky"
      {...rest}
    />
  );
};

const refIsInView = ({ y = 0, ref = { current: {} } }: { y: number; ref: React.RefObject<HTMLDivElement> | { current: any } }) => {
  if (!ref.current) return false;
  const topIsInView = y + window.innerHeight >= ref.current?.offsetTop + ref.current?.clientHeight;
  const bottomIsInView = y <= ref.current.offsetTop + ref.current.offsetHeight - 100;
  return topIsInView && bottomIsInView;
};

const showItemIfInView = (setState: Dispatch<SetStateAction<boolean>>, ref: React.RefObject<HTMLDivElement>) => (y: number) => {
  const isInView = refIsInView({ y, ref });
  setState(isInView);
};
