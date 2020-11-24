import styled from '@emotion/styled';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { IExperience, experiences } from 'utils/contants/experiences';

export const Experience: FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Header>{t('experience')}</Header>
      <ExperienceList experiences={experiences} />
    </Box>
  );
};

const ExperienceList: FC<{ experiences: IExperience[] }> = ({ experiences }) => {
  return (
    <Box my={5}>
      {experiences.map((experience, index) => (
        <Box key={index} minHeight="100px" display="flex" mt={2}>
          <LeftLine />
          <Box ml={3}>
            <Paragraph m={0} fontSize={4} fontWeight={4} lineHeight={3} color="text">
              {experience.role} @ {experience.company}
            </Paragraph>
            <Paragraph color="text" my={2} fontWeight={2}>
              {experience.startDate} - {experience.endDate}
            </Paragraph>
          </Box>
          <Box></Box>
        </Box>
      ))}
    </Box>
  );
};

const LeftLine: FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Circle />
      <Line />
    </Box>
  );
};

const Circle = styled(Box)``;
Circle.defaultProps = {
  borderRadius: '100%',
  width: '1rem',
  height: '1rem',
  bg: 'complementary'
};

const Line = styled(Box)``;
Line.defaultProps = {
  mt: 2,
  width: '1px',
  flex: 1,
  bg: 'text'
};
