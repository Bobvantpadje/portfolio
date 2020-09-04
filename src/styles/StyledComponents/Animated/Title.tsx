import styled from '@emotion/styled';
import { IBoxProps } from '@types';
import { motion } from 'framer-motion';
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system';

export const AnimatedTitle: React.FC<IBoxProps> = () => {
  return (
    <StyledMotionDiv color="complementary" initial={{ y: 50 }} animate={{ y: 0 }}>
      Title
    </StyledMotionDiv>
  );
};

const StyledMotionDiv = styled(motion.div)`
  ${color}
  ${position}
  ${space} 
  ${shadow} 
  ${grid} 
  ${color}
  ${layout}
  ${border}
  ${typography}
  ${background}
  ${flexbox}
`;
