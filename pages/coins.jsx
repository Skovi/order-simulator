import styled from '@emotion/styled';
import BG1 from '../image/Монетки/BG1.png';
import BG2 from '../image/Монетки/BG2.png';
import Cells from '../image/Монетки/Cells.svg';

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
  // background: ##5E3E0D
`
const ContainerCell = styled.div`
  width: 886px;
  margin: auto;
  border-radius: 50px;
  box-shadow: 0px 0px 30px 0px #331b2f;
  height: 223px;
  background: url(${Cells.src}) center bottom -8px no-repeat;
`

export const Coins = () => {
  return (
    <Container>
      <ContainerCoins>

      </ContainerCoins>
      <ContainerCell>

      </ContainerCell>
    </Container>
  )
};
