import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';

const loremText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae tenetur atque sint labore cum, illum architecto officiis modi possimus, dolor adipisci laboriosam necessitatibus quas molestiae maxime voluptatibus? Numquam, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit recusandae nulla tempora quibusdam distinctio modi minima aliquam sapiente et! Nemo cumque debitis pariatur itaque eius voluptas est deleniti atque.';

const About: FC = () => {
  return (
    <Box>
      <Header>About</Header>
      <AboutItem title="lorem" content={loremText} />
      <AboutItem title="lorem" content={loremText} />
      <AboutItem title="lorem" content={loremText} />
    </Box>
  );
};

export default About;

const AboutItem: FC<{ title: string; content: string }> = ({ title, content }) => (
  <Box display="flex">
    <Box width="50%">
      <Box bg="complementary" mt={200} ml={100} width={200} height={200}></Box>
    </Box>
    <Box width="50%">
      <Header variant="h1" mb={5}>
        {title}
      </Header>
      <Paragraph color="text" fontSize={5} lineHeight={5} mb={5}>
        {content}
      </Paragraph>
    </Box>
  </Box>
);
