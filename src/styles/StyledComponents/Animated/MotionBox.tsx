// import styled from 'styled-components'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography } from 'styled-system';

// @ts-expect-error
export const MotionBox = styled(motion.div)<IBoxProps>`
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
  ${system({
    textDecoration: true,
    cursor: true,
    visibility: true,
    backdropFilter: true,
    transform: true
  })}
`;
