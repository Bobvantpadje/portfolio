import { ProgressChart } from 'components/utils/ProgressChart';
import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { addOpacity } from 'utils/helpers/addOpacity';
import { useWindowSize } from 'utils/hooks/useWindowSize';
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
  const windowSize = useWindowSize();
  const chartSize = getChartSize({ width: windowSize.width });

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
        <ProgressChart percentage={skill.percentage} color={skill.color} delay={delay} size={chartSize} />
      </Box>
    </MotionBox>
  );
};

const getChartSize = ({ width }: { width: number }) => {
  if (width < 768) return 30;
  return 60;
};
