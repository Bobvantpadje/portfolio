import { motion, useSpring } from 'framer-motion';
import React, { FC } from 'react';
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
      <Box>
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
          transition={{ duration: 1, delay: delay + 1 }}
        />
        {/* <motion.circle
          cx="60"
          cy="60"
          r="54"
          strokeWidth="12"
          fill="none"
          stroke={addOpacity(color, 0.75)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: delay + 1 }}
        /> */}
        {/* <circle cx="60" cy="60" r="54" stroke-width="12" /> */}
      </svg>
      {/* <svg viewBox="0 0 60 60"> */}
      {/* <motion.path
          fill="none"
          strokeWidth="7"
          stroke={addOpacity(color, 0.5)}
          d="M 0, 30 a 30, 30 0 1,0 40,0 a 30, 30 0 1,0 -60,0"
          strokeDasharray="0 1"
          // initial={{ pathLength: 1, rotate: 90, translateX: 10, translateY: 15 }}
          initial={{ pathLength: 1, rotate: 90, translateX: 10 }}
        /> */}
      {/* <motion.path
          fill="none"
          strokeWidth="7"
          stroke={addOpacity(color, 0.75)}
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          strokeDasharray="0 1"
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: delay + 1 }}
        /> */}
      {/* </svg> */}
      <Box position="absolute" width="100%" height="100%" top={0} display="flex" justifyContent="center" alignItems="center">
        {percentage}
      </Box>
    </Box>
  );
};

const container = {
  show: {
    // transition: { delay: 1, duration: 1 },
    pathLength: 0.9,
    rotate: 90,
    translateX: 10
    // translateY: 15
  },
  hidden: {
    // transition: { delay: 1, duration: 1 },
    pathLength: 0,
    rotate: 90,
    translateX: 10
    // translateY: 15
  }
};
