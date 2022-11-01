import styled from '@emotion/styled';
import BG11 from '../image/Игрушки/BG11.png';
import BG12 from '../image/Игрушки/BG12.png';
import BG21 from '../image/Игрушки/BG21.png';
import BG22 from '../image/Игрушки/BG22.png';
import Cells from '../image/Игрушки/Cells.png';
import CellsBG from '../image/Игрушки/CellsBG.png';

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
  // background: ##5E3E0D
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
`

export const ChristmasToys = () => {
  return (
    <Container>
      <ContainerChristmasToys>

      </ContainerChristmasToys>
      <ContainerCell>

      </ContainerCell>
    </Container>
  )
};
