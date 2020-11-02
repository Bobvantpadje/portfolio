import { ProgressChart } from 'components/utils/ProgressChart';
import { motion, useSpring, animate } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
// import { animate } from 'framer-motion';
import { opacity } from 'styled-system';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { addOpacity } from 'utils/helpers/addOpacity';
import { SkillTitle } from './SkillTitle';

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
    <MotionBox
      display="flex"
      flexDirection={['row', 'column']}
      variants={variants}
      transition={{ duration: 1, delay }}
      bg={addOpacity(skill.color, 0.15)}
      borderRadius={[3]}
      p={[3]}>
      <SkillTitle skill={skill} />
      <Box mt={[0, 3]} ml={['auto', 0]} position="relative" top={[-14, 0]}>
        <ProgressChart percentage={skill.percentage} color={skill.color} delay={delay} />
      </Box>
    </MotionBox>
  );
};
