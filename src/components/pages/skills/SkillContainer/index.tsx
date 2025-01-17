import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { skills as defaultSkills } from 'utils/contants/skills';
import { Skill } from './Skill';

type IProps = {
  skills?: Skill[];
};
export const SkillContainer: FC<IProps> = ({ skills = defaultSkills }) => {
  return (
    <MotionBox
      transition={{
        duration: 1
      }}
      initial="hidden"
      animate="show"
      display="grid"
      gridTemplateColumns={['100%', '168px 168px 168px', '168px 168px 168px', '168px 168px 168px 168px']}
      gridAutoRows={['64px', '216px']}
      gridGap={[3, 5]}
      justifyContent="center">
      {skills.map((skill, i) => (
        <Skill key={i} skill={skill} delay={i * 0.3} />
      ))}
    </MotionBox>
  );
  // return (
  //   <MotionBox
  //     variants={container}
  //     transition={{
  //       // staggerChildren: 0.5,
  //       duration: 1
  //     }}
  //     initial="hidden"
  //     animate="show"
  //     display="grid"
  //     gridTemplateColumns={['100%', '168px 168px 168px', '168px 168px 168px', '168px 168px 168px 168px']}
  //     gridAutoRows={['64px', '216px']}
  //     gridGap={[3, 5]}
  //     justifyContent="center">
  //     {skills.map((skill, i) => (
  //       <Skill key={i} skill={skill} delay={i * 0.3} />
  //     ))}
  //   </MotionBox>
  // );
};
