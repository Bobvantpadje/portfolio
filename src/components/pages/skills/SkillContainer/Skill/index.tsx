import React, { FC } from 'react';
import { opacity } from 'styled-system';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { addOpacity } from 'utils/helpers/addOpacity';

export const Skill: FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Box bg={addOpacity(skill.color, 0.15)} borderRadius={[3]} p={[3]}>
      <Title skill={skill} />
    </Box>
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
