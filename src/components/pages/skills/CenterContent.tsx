import { ROW_HEIGHT } from 'components/utils/PageGrid/AnimatedPageContainer';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { SkillContainer } from './SkillContainer';
export const CenterContent: FC = () => {
  const { t } = useTranslation();
  return (
    <Box textAlign="center" gridRow="1 / span 3" gridColumn="1 / span 3" p={[3, ROW_HEIGHT]} overflow="auto">
      <Header>{t('skills')}</Header>
      <Paragraph mt={[3, 5]} mb={[3, 6]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ea dignissimos voluptatum velit quam asperiores distinctio quae
        porro neque, tempora qui laudantium ad, dolorem maxime recusandae harum excepturi voluptates odio!
      </Paragraph>
      <SkillContainer />
    </Box>
  );
};
