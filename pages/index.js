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
  const ASCENDING = 'ascending';
  const DESCENDING = 'descending';

  const data = {
    numberOfItems: '2',
    valueOfItems: 'A',
    orderOfCalculation: ASCENDING,
  };
  return (
    <Container>
      <Head>
        <title>Тренажер "Порядок"</title>
        <meta name="description" content="Order simulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Start /> */}
      {/* <Buns data={data} /> */}
      {/* <Flowers data={data} /> */}
      {/* <Coins data={data} /> */}
      {/* <ChristmasToys data={data} /> */}
      {/* <Finish /> */}
    </Container>
  )
};
