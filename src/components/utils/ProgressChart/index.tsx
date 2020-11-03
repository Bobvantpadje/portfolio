import { animate, motion } from 'framer-motion';
import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { addOpacity } from 'utils/helpers/addOpacity';

type Props = { percentage: number; color: string; delay?: number; size?: number };
export const ProgressChart: FC<Props> = ({ percentage, color, delay = 0, size = 60 }) => {
  // const defaultCircleProps = useMemo(() => {
  //   const circleRadius = size - 8;
  //   const strokeWidth = size / 4;
  //   return { cx: size, cy: size, r: circleRadius, strokeWidth: strokeWidth, fill: 'none' };
  // }, [size]);
  const circleRadius = size - 8;
  const strokeWidth = size / 4;
  const defaultCircleProps = { cx: size, cy: size, r: circleRadius, strokeWidth: strokeWidth, fill: 'none' };
  const dashPath = 2 * Math.PI * defaultCircleProps.r;
  const progressCircle = dashPath * (1 - percentage);
  return (
    <Box position="relative">
      <svg
        width={size * 2}
        height={size * 2}
        viewBox={`0 0 ${size * 2} ${size * 2}`}
        style={{ transform: 'rotate(-90deg) scaleX(1) scaleY(-1)' }}>
        <motion.circle
          {...defaultCircleProps}
          stroke={addOpacity(color, 0.5)}
          pathLength={0.5}
          rotate={-90}
          strokeDashoffset={0}
          strokeDasharray={dashPath}
        />
        <motion.circle
          {...defaultCircleProps}
          stroke={addOpacity(color, 0.75)}
          initial={{ pathLength: 0.5, strokeDashoffset: dashPath, strokeDasharray: dashPath }}
          // animate={{ strokeDashoffset: progressCircle }}
          animate={{ pathLength: 0.5, strokeDashoffset: progressCircle, strokeDasharray: dashPath }}
          transition={{ duration: 2, delay: delay, ease: 'easeIn' }}
        />
      </svg>
      <Box position="absolute" width="100%" height="100%" top={0} display="flex" justifyContent="center" alignItems="center">
        <AnimatedNumberCounter value={percentage * 100} delay={delay} />
      </Box>
    </Box>
  );
};

const AnimatedNumberCounter: FC<{ value: number; delay: number }> = ({ value, delay = 0 }) => {
  const nodeRef = useRef(0);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: 'easeIn',
      onUpdate(value: number) {
        if (node) {
          node.textContent = `${value.toFixed(0)}%`;
        }
      }
    });

    return () => controls.stop();
  }, [value]);

  return <Paragraph fontWeight={[3]} color="white" ref={nodeRef} />;
};
