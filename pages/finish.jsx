import styled from '@emotion/styled';
import FinishBG from '../image/FinishBG.svg';

const ContainerFinish = styled.div`
  width: 980px;
  height: 810px;
  margin: 4% auto;
  background: 
    url(${FinishBG.src}) center center no-repeat, 
    #20153699;
  display: flex;
  justify-content: center;
`

const H1 = styled.h1`
  font-family: 'CirceRounded';
`

const H3 = styled.h3`

`

const Button = styled.button`
  background: #38DF7A;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: 'Helvetica';
  font-size: 32px;
  line-height: 44px;
  align-items: center;
  color: #FFFFFF;
  width: 263px;
  height: 68px;
  border: none;
  cursor: pointer;
`

export const Finish = () => {
  return (
    <ContainerFinish>
      <H1>Победа!</H1>
      <H3>Молодец! Ты успешно справился с заданием!</H3>
      <Button>Заново</Button>
    </ContainerFinish>
  )
};
