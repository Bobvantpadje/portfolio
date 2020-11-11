import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { AboutText } from './AboutText';
import { SkillIcons } from './SkillIcons';

const container = {
  hidden: { opacity: 0, width: '0%', height: '0%' },
  show: {
    opacity: 1,
    width: '100%',
    height: '100%',
    transition: {
      duration: 1,
      delayChildren: 1,
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

const imageVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const size = [300, 400, 500, 600, 700];

export const ImageCircle: FC & { Text: FC; SkillIcons: FC } = ({ children }) => {
  return (
    <Box width={size} height={size} display="flex" justifyContent="center" alignItems="center">
      <MotionBox bg="secondary" borderRadius="100%" position="relative" variants={container} initial="hidden" animate="show">
        <MotionBox
          variants={imageVar}
          position="absolute"
          transition={{ duration: 1 }}
          width="100%"
          height="100%"
          overflow="hidden"
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-end">
          <img src="/images/self.png" alt="my image" style={{ height: '90%' }} />
        </MotionBox>
        {children}
      </MotionBox>
    </Box>
  );
};

ImageCircle.Text = AboutText;
ImageCircle.SkillIcons = SkillIcons;
