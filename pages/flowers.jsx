import styled from '@emotion/styled';
import Flower1 from '../image/Цветочки/Flower1.svg';
import Flower2 from '../image/Цветочки/Flower2.png';
import Flower3 from '../image/Цветочки/Flower3.png';
import Flower4 from '../image/Цветочки/Flower4.png';
import Flower5 from '../image/Цветочки/Flower5.png';
import BG11 from '../image/Цветочки/BG11.png';
import BG12 from '../image/Цветочки/BG12.png';
import BG21 from '../image/Цветочки/BG21.png';
import BG22 from '../image/Цветочки/BG22.png';
import Cells from '../image/Цветочки/Cells.png';
import Cell from '../image/Cell.png';
import { useEffect } from 'react';
import { hiddenElement } from '../utils/functions';
import Ascending from '../image/Ascending.png';
import Descending from '../image/Descending.png';

const Container = styled.div`
  width: 980px;
  height: 810px;
  margin: 4% auto;
  background:
    url(${BG11.src}) left top no-repeat,
    url(${BG12.src}) left bottom no-repeat,
    url(${BG21.src}) right top no-repeat,
    url(${BG22.src}) right bottom no-repeat,
    #2D3539;
`
const ContainerFlowers = styled.div`
  height: 557px;
  display: flex;
  align-items: center;
  z-index: 1;
`
const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  height: 223px;
  background: url(${Cells.src}) center bottom -8px no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 0;
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
  top: 188px; 
  right: 120px;
`
const Image5 = styled.img`
  position: relative;
  top: 243px; 
  right: 180px;
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

export const Flowers = ({ data }) => {

  useEffect(() => {
    hiddenElement(data.numberOfItems);
  }, [data.numberOfItems]);

  return (
    <Container>
      <ContainerFlowers>
        <Image1 src={Flower1.src} alt='Цветок 1' id='1f' />
        <Image2 src={Flower2.src} alt='Цветок 2' id='2f' />
        <Image3 src={Flower3.src} alt='Цветок 3' id='3f' />
        <Image4 src={Flower4.src} alt='Цветок 4' id='4f' />
        <Image5 src={Flower5.src} alt='Цветок 5' id='5f' />
        <ImageAscending src={Ascending.src} alt='Стрелка по возрастанию' id='ascending-image' />
        <ImageDescending src={Descending.src} alt='Стрелка по убыванию' id='descending-image' />
      </ContainerFlowers>
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
