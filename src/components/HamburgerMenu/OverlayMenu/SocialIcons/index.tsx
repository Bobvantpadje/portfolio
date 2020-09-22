import styled from '@emotion/styled';
import { FacebookIcon } from 'icons/facebook';
import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';

export const SocialIcons: FC = () => {
  return (
    <>
      <Box position="absolute" bottom={[3]} zIndex={1} display="flex">
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
      </Box>
      <GreenBottomBorder />
    </>
  );
};

const IconContainer = styled(Box)``;
IconContainer.defaultProps = {
  ml: [2],
  mr: [2]
};

const GreenBottomBorder = styled(MotionBox)``;
GreenBottomBorder.defaultProps = {
  bg: 'complementary',
  width: '200vw',
  // height: '87%',
  height: 575,
  bottom: -490,
  // bottom: '-130vw',

  transform: 'rotate(9.6deg)',
  borderRadius: '60% 40% 40% 60% / 50% 40% 60% 60%',
  left: '-36vw',
  position: 'absolute',
  variants: {
    open: {
      y: '0%',
      opacity: 1,
      rotate: 6.9,
      transition: {
        duration: 1,
        delay: 0.1
      }
    },
    closed: {
      y: '87%',
      opacity: 0,
      rotate: 60,
      transition: {
        duration: 1
      }
    }
  }
};
