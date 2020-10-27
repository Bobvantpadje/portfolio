import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';

export const Skill: FC<{ skill: Skill }> = ({ skill }) => {
  return <Box>{skill.name}</Box>;
};
