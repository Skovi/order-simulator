import styled from '@emotion/styled';
import { useEffect } from 'react';
import BG1 from '../image/Монетки/BG1.png';
import BG2 from '../image/Монетки/BG2.png';
import Cells from '../image/Монетки/Cells.svg';
import { hiddenElement } from '../utils/functions';
import Cell from '../image/Cell.png';
import Coin1 from '../image/Монетки/Coin1.png';
import Coin2 from '../image/Монетки/Coin2.png';
import Coin3 from '../image/Монетки/Coin3.png';
import Ascending from '../image/Ascending.png';
import Descending from '../image/Descending.png';


const Container = styled.div`
  width: 980px;
  height: 810px;
  margin: 4% auto;
  background:
    url(${BG1.src}) left top no-repeat,
    url(${BG2.src}) right top no-repeat,
    #3A1F36;
`
const ContainerCoins = styled.div`
  height: 557px;
`
const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  box-shadow: 0px 0px 30px 0px #331b2f;
  height: 223px;
  background: url(${Cells.src}) center bottom -8px no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Image1 = styled.img`
  position: relative;
  top: 232px; 
  left: 40px;
`
const Image2 = styled.img`
  position: relative;
  top: 186px;
  right: 40px; 
`
const Image3 = styled.img`
  position: relative;
  top: 254px; 
  right: 90px;
`
const Image4 = styled.img`
  position: relative;
  top: 254px; 
  right: 90px;
`
const Image5 = styled.img`
  position: relative;
  top: 254px; 
  right: 90px;
`
const Image6 = styled.img`
  position: relative;
  top: 254px; 
  right: 90px;
`
const ImageAscending = styled.img`
  position: relative;
  top: 310px; 
  left: 57px;
`
const ImageDescending = styled.img`
  position: relative;
  top: 310px; 
  left: 245px;
`

export const Coins = ({ data }) => {

  useEffect(() => {
    hiddenElement(data.numberOfItems);
  }, [data.numberOfItems]);

  return (
    <Container>
      <ContainerCoins>
        <Image1 src={Coin1.src} alt='Цветок 1' id='1c' />
        <Image2 src={Coin2.src} alt='Цветок 2' id='2c' />
        <Image3 src={Coin3.src} alt='Цветок 3' id='3c' />
        <Image4 src={Coin1.src} alt='Цветок 4' id='4c' />
        <Image5 src={Coin2.src} alt='Цветок 5' id='5c' />
        <Image6 src={Coin3.src} alt='Цветок 6' id='6c' />
        <ImageAscending src={Ascending.src} alt='Стрелка по возрастанию' id='ascending-image' />
        <ImageDescending src={Descending.src} alt='Стрелка по убыванию' id='descending-image' />
      </ContainerCoins>
      <ContainerCell>
        <img src={Cell.src} alt='Ячейка 1' id='1' />
        <img src={Cell.src} alt='Ячейка 2' id='2' />
        <img src={Cell.src} alt='Ячейка 3' id='3' />
        <img src={Cell.src} alt='Ячейка 4' id='4' />
        <img src={Cell.src} alt='Ячейка 5' id='5' />
        <img src={Cell.src} alt='Ячейка 6' id='6' />
      </ContainerCell>
    </Container>
  )
};
