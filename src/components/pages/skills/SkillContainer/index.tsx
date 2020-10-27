import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { skills as defaultSkills } from 'utils/contants/skills';
import { Skill } from './Skill';

type IProps = {
  skills?: Skill[];
};
export const SkillContainer: FC<IProps> = ({ skills = defaultSkills }) => {
  return (
    <Box display="grid" gridTemplateColumns={['168px 168px 168px 168px']} gridAutoRows={['216PX']} gridGap={[5]} justifyContent="center">
      {skills.map((skill, i) => (
        <Skill key={i} skill={skill} />
      ))}
    </Box>
  );
};
