import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedHeader, getHeaderAnimationTime } from 'styles/StyledComponents/Animated/AnimatedHeader';
import { Box } from 'styles/StyledComponents/Box';

export const AboutText = () => {
  const { t } = useTranslation();
  const delay = 1.5;
  return (
    <Box position="absolute" left="-25%" top="20%" width="60%">
      <Spacing>
        <AnimatedHeader variant="h3" text={t('home_welcomeMessage')} initialDelay={1.5} />
      </Spacing>
      <Spacing>
        <AnimatedHeader variant="xl" text={t('name')} initialDelay={delay + getHeaderAnimationTime(t('home_welcomeMessage'))} />
      </Spacing>
      <Spacing>
        <AnimatedHeader
          variant="h3"
          text={t('home_jobTitle')}
          initialDelay={delay + getHeaderAnimationTime(t('home_welcomeMessage')) + getHeaderAnimationTime(t('home_welcomeMessage'))}
        />
      </Spacing>
    </Box>
  );
};

const Spacing = styled(Box)``;
Spacing.defaultProps = {
  mt: [3]
};