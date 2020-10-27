import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { skills as defaultSkills } from 'utils/contants/skills';
import { Skill } from './Skill';

type IProps = {
  skills?: Skill[];
};
export const SkillContainer: FC<IProps> = ({ skills = defaultSkills }) => {
  return (
    <Box>
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </Box>
  );
};
