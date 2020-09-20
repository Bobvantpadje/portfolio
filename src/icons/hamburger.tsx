import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';

export const HamburgerIcon = () => (
  <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* <circle opacity="0.4" cx="28" cy="12" r="11" fill="#21E6C1" stroke="#21E6C1" strokeWidth="2" /> */}
    <rect x="6" y="15" width="26" height="3" rx="1" rotate="90" fill="#F1F3F8" />
    <rect x="16" y="24" width="16" height="3" rx="1.5" fill="#F1F3F8" />
    <rect y="6" width="32" height="3" rx="1.5" fill="#F1F3F8" />
  </svg>
);

export const AnimatedBurgerIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <motion.svg cursor="pointer" animate={isOpen ? 'open' : 'closed'} width="23" height="23" viewBox="0 0 23 23">
      <StyledPath
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <StyledPath
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 }
        }}
        initial="closed"
        d="M 2 9.423 L 20 9.423"
      />
      <StyledPath variants={{ closed: { d: 'M 2 16.346 L 20 16.346' }, open: { d: 'M 3 2.5 L 17 16.346' } }} />
    </motion.svg>
  );
};

const StyledPath = styled(motion.path)``;
StyledPath.defaultProps = {
  initial: 'closed',
  stroke: 'white',
  strokeWidth: '3',
  strokeLinecap: 'round',
  fill: 'transparent'
};
