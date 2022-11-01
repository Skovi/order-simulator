import styled from '@emotion/styled';
import Head from 'next/head';
import { Start } from './start';
import { Buns } from './buns';
import { Flowers } from './flowers';
import { Coins } from './coins';
import { ChristmasToys } from './christmas-toys';
import { Finish } from './finish';

const Container = styled.div`
width: 100%;
height: 100%;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Тренажер "Порядок"</title>
        <meta name="description" content="Order simulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Start />
      {/* <Buns /> */}
      {/* <Flowers /> */}
      {/* <Coins /> */}
      {/* <ChristmasToys /> */}
      {/* <Finish /> */}
    </Container>
  )
};
