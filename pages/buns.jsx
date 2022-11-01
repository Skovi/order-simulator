import styled from '@emotion/styled';
import BunLeft from '../image/Булочки/BunLeft.png';
import BunRight from '../image/Булочки/BunRight.png';
import CellBg from '../image/Булочки/CellBg.png';
import Cells from '../image/Булочки/Cells.png';
import Cell from '../image/Cell.png';

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
  background: ##5E3E0D
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
    // url(${Cell.src}) center center no-repeat;
`

export const Buns = () => {
  return (
    <Container>
      <ContainerBuns>

      </ContainerBuns>
      <ContainerCell>

      </ContainerCell>
    </Container>
  )
};
