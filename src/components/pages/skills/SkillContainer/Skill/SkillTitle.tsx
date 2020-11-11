import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { addOpacity } from 'utils/helpers/addOpacity';

export const SkillTitle: FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Box color={skill.color} alignItems="center" display="flex">
      <Box
        width="2rem"
        height="2rem"
        bg={addOpacity(skill.color, 0.15)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={[1]}>
        <img src={skill.imagePath} height="60%" />
      </Box>
      <Box ml={[2]}>{skill.name}</Box>
    </Box>
  );
};
