import styled from '@emotion/styled';
import BunLeft from '../image/Булочки/BunLeft.png';
import BunRight from '../image/Булочки/BunRight.png';
import CellBg from '../image/Булочки/CellBg.png';
import Cells from '../image/Булочки/Cells.png';
import Cell from '../image/Cell.png';
import { useEffect } from 'react';
import { hiddenElement } from '../utils/functions';
import Ascending from '../image/Ascending.png';
import Descending from '../image/Descending.png';
import Bun1 from '../image/Булочки/Bun1.png';
import Bun2 from '../image/Булочки/Bun2.png';
import Bun3 from '../image/Булочки/Bun3.png';
import Bun4 from '../image/Булочки/Bun4.png';

const Container = styled.div`
  width: 980px;
  height: 810px;
  margin: 4% auto;
  background:
    url(${BunRight.src}) right top no-repeat,
    url(${BunLeft.src}) left top no-repeat,
    #DEC6AA;
`
const ContainerBuns = styled.div`
  height: 557px;
`

const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  box-shadow: 0px 0px 30px 0px #c4ae96;
  height: 223px;
  background:
    url(${CellBg.src}) center bottom no-repeat,
    url(${Cells.src}) center bottom -8px no-repeat;
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
  top: 188px; 
  right: 120px;
`
const Image5 = styled.img`
  position: relative;
  top: 243px; 
  right: 180px;
`
const Image6 = styled.img`
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


export const Buns = ({ data }) => {

  useEffect(() => {
    hiddenElement(data.numberOfItems);
  }, [data.numberOfItems]);

  return (
    <Container>
      <ContainerBuns>
        <Image1 src={Bun1.src} alt='Булочка 1' id='1b' />
        <Image2 src={Bun2.src} alt='Булочка 2' id='2b' />
        <Image3 src={Bun3.src} alt='Булочка 3' id='3b' />
        <Image4 src={Bun4.src} alt='Булочка 4' id='4b' />
        <Image5 src={Bun1.src} alt='Булочка 5' id='5b' />
        <Image6 src={Bun2.src} alt='Булочка 6' id='6b' />
        <ImageAscending src={Ascending.src} alt='Стрелка по возрастанию' id='ascending-image' />
        <ImageDescending src={Descending.src} alt='Стрелка по убыванию' id='descending-image' />
      </ContainerBuns>
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
