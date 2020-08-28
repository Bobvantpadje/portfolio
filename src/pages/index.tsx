import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';

export default function Home() {
  return (
    <Box bg="primary" width="100%" minHeight="100vh">
      <Header>Dit is de header 1</Header>
      <Header variant="h2">Dit is de header 2</Header>
      <Header variant="h3">Dit is de header 3</Header>
      <Header variant="h4">Dit is de header 4</Header>
      <Header variant="h5">Dit is de header 5</Header>
    </Box>
  );
}
