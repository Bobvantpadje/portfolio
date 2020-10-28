import { motion, useSpring, animate } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
// import { animate } from 'framer-motion';
import { opacity } from 'styled-system';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { addOpacity } from 'utils/helpers/addOpacity';

const variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0
  }
};

export const Skill: FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  return (
    <MotionBox variants={variants} transition={{ duration: 1, delay }} bg={addOpacity(skill.color, 0.15)} borderRadius={[3]} p={[3]}>
      <Title skill={skill} />
      <Box mt={[3]}>
        <ProgressChart percentage={skill.percentage} color={skill.color} delay={delay} />
      </Box>
    </MotionBox>
  );
};

const Title: FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Box color={skill.color} alignItems="center" display="flex">
      {/* <img src={skill.imagePath} /> */}
      <Box
        width="2rem"
        height="2rem"
        bg={addOpacity(skill.color, 0.15)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={[1]}>
        <img src={'images/skills/javascript-icon.png'} height="60%" />
      </Box>
      <Box ml={[2]}>{skill.name}</Box>
    </Box>
  );
};

const circleRadius = 52;
const size = 60;
const dashPath = 2 * Math.PI * circleRadius;
const ProgressChart: FC<{ percentage: number; color: string; delay?: number }> = ({ percentage, color, delay = 0 }) => {
  const progressCircle = dashPath * (1 - percentage);
  return (
    <Box position="relative">
      <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size * 2} ${size * 2}`}>
        <motion.circle
          cx={size}
          cy={size}
          r={circleRadius}
          strokeWidth={(size - circleRadius) * 2}
          fill="none"
          stroke={addOpacity(color, 0.5)}
          initial={{ pathLength: 0.5, rotate: -90, strokeDashoffset: 0, strokeDasharray: dashPath, scaleX: -1, scaleY: 1 }}
        />
        <motion.circle
          cx={size}
          cy={size}
          r={circleRadius}
          strokeWidth={(size - circleRadius) * 2}
          fill="none"
          stroke={addOpacity(color, 0.75)}
          initial={{ pathLength: 0.5, rotate: -90, strokeDashoffset: dashPath, strokeDasharray: dashPath, scaleX: -1, scaleY: 1 }}
          animate={{ strokeDashoffset: progressCircle }}
          transition={{ duration: 2, delay: delay, ease: 'easeIn' }}
        />
      </svg>
      <Box position="absolute" width="100%" height="100%" top={0} display="flex" justifyContent="center" alignItems="center">
        <AnimatedNumberCounter value={percentage * 100} delay={delay} />
      </Box>
    </Box>
  );
};

export const AnimatedNumberCounter: FC<{ value: number; delay: number }> = ({ value, delay = 0 }) => {
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
