import styled from '@emotion/styled';
import React from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';

const itemContainer = {
  hidden: {
    opacity: 1
  },
  show: {
    opacity: 1
  }
};
export const SkillIcons = () => {
  return (
    <MotionBox
      variants={itemContainer}
      transition={{
        staggerChildren: 0.5,
        duration: 1
      }}
      right={['0', '-25%']}
      width={['100%', '25%']}
      height={['25%', '100%']}
      position="absolute"
      bottom={['100%', 'auto']}
      display="flex"
      flexDirection={['row', 'column']}
      justifyContent={['space-between', 'space-around']}>
      <SkillCircle />
      <SkillCircle ml="30%" display={['none', 'block']} />
      <SkillCircle />
    </MotionBox>
  );
};

const SkillCircle = styled(MotionBox)``;
SkillCircle.defaultProps = {
  variants: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
  transition: { duration: 1 },
  bg: 'secondary',
  width: ['30%', '100%'],
  pt: ['30%', '100%'],
  borderRadius: '100%'
};
