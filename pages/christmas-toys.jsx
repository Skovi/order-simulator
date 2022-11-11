import styled from '@emotion/styled';
import BG11 from '../image/Игрушки/BG11.png';
import BG12 from '../image/Игрушки/BG12.png';
import BG21 from '../image/Игрушки/BG21.png';
import BG22 from '../image/Игрушки/BG22.png';
import Cells from '../image/Игрушки/Cells.png';
import CellsBG from '../image/Игрушки/CellsBG.png';
import Cell from '../image/Cell.png';
import { useEffect } from 'react';
import { hiddenElement } from '../utils/functions';
import Ascending from '../image/Ascending.png';
import Descending from '../image/Descending.png';
import Toy1 from '../image/Игрушки/Toy1.png';
import Toy2 from '../image/Игрушки/Toy2.png';
import Toy3 from '../image/Игрушки/Toy3.png';
import Toy4 from '../image/Игрушки/Toy4.png';

const Container = styled.div`
  width: 980px;
  height: 810px;
  margin: 4% auto;
  background:
  url(${BG11.src}) left top no-repeat,
  url(${BG12.src}) left bottom no-repeat,
  url(${BG21.src}) right top no-repeat,
  url(${BG22.src}) right bottom no-repeat,
    #132738;
`
const ContainerChristmasToys = styled.div`
  height: 557px;
`
const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  box-shadow: 0px 0px 30px 0px #122535;
  height: 223px;
  background: 
    url(${CellsBG.src}) center bottom no-repeat,
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

export const ChristmasToys = ({ data }) => {

  useEffect(() => {
    hiddenElement(data.numberOfItems);
  }, [data.numberOfItems]);

  return (
    <Container>
      <ContainerChristmasToys>
        <Image1 src={Toy1.src} alt='Игрушка 1' id='1b' />
        <Image2 src={Toy2.src} alt='Игрушка 2' id='2b' />
        <Image3 src={Toy3.src} alt='Игрушка 3' id='3b' />
        <Image4 src={Toy4.src} alt='Игрушка 4' id='4b' />
        <Image5 src={Toy1.src} alt='Игрушка 5' id='5b' />
        <Image6 src={Toy2.src} alt='Игрушка 6' id='6b' />
        <ImageAscending src={Ascending.src} alt='Стрелка по возрастанию' id='ascending-image' />
        <ImageDescending src={Descending.src} alt='Стрелка по убыванию' id='descending-image' />
      </ContainerChristmasToys>
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
