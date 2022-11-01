import styled from '@emotion/styled';
import Flower11 from '../image/Цветочки/Flower11.png';
import Flower12 from '../image/Цветочки/Flower12.png';
import Flower2 from '../image/Цветочки/Flower2.png';
import Flower3 from '../image/Цветочки/Flower3.png';
import Flower4 from '../image/Цветочки/Flower4.png';
import Flower5 from '../image/Цветочки/Flower5.png';
import BG11 from '../image/Цветочки/BG11.png';
import BG12 from '../image/Цветочки/BG12.png';
import BG21 from '../image/Цветочки/BG21.png';
import BG22 from '../image/Цветочки/BG22.png';
import Cells from '../image/Цветочки/Cells.png';

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
  // background: ##5E3E0D
`
const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  // box-shadow: 0px 0px 30px 0px #344b3e;
  height: 223px;
  background: url(${Cells.src}) center bottom -8px no-repeat;
`

export const Flowers = () => {
  return (
    <Container>
      <ContainerFlowers>

      </ContainerFlowers>
      <ContainerCell>

      </ContainerCell>
    </Container>
  )
};
