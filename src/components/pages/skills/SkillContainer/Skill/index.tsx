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

const ProgressChart: FC<{ percentage: number; color: string; delay?: number }> = ({ percentage, color, delay = 0 }) => {
  const pathLength = useSpring(100);
  const zero = useSpring(0);
  return (
    <svg viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="7"
        stroke={addOpacity(color, 0.5)}
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        strokeDasharray="0 1"
        initial={{ pathLength: 1, rotate: 90, translateX: 10, translateY: 15 }}
        // animate={{ pathLength: 1 }}
        // transition={{ delay: 1 }}
      />
      <motion.path
        fill="none"
        strokeWidth="7"
        stroke={addOpacity(color, 0.75)}
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        strokeDasharray="0 1"
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ duration: 1, delay: delay + 1 }}
        // initial={{ pathLength: 0, rotate: 90, translateX: 10, translateY: 15 }}
        // animate={{ pathLength: 0.9 }}
        // transition={{ delay: 1, duration: 1 }}
      />
    </svg>
  );
};

const container = {
  show: {
    // transition: { delay: 1, duration: 1 },
    pathLength: 0.9,
    rotate: 90,
    translateX: 10,
    translateY: 15
  },
  hidden: {
    // transition: { delay: 1, duration: 1 },
    pathLength: 0,
    rotate: 90,
    translateX: 10,
    translateY: 15
  }
};
