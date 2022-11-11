import styled from '@emotion/styled';
import { useState } from 'react';
import StartBG from '../image/StartBG.png';
import { Buns } from './buns';
import { Flowers } from './flowers';
import { Coins } from './coins';
import { ChristmasToys } from './christmas-toys';

const H3 = styled.h3`
margin: 4% auto;
`
const ContainerStart = styled.div`
  width: 980px;
  height: 810px;
  background: url(${StartBG.src});
  margin: 4% auto;
  display: flex;
  justify-content: center;
  user-select:none;
`

const BorderBlock = styled.div`
  margin: auto;
  width: 699px;
  height: 660px;
  // background: #FFFFFF;
  // border: 20px solid #7F75F0;
  // border-radius: 40px;
  // border-image: linear-gradient(#7F75F0, #101F32);
  // border-image-slice: 1;
  border: double 1em transparent;
  border-radius: 30px;
  background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#7F75F0, #101F32);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 32px;
  line-height: 44px;
`
const ContainerYellowButton = styled.div`
  width: 531px;
  display: flex;
  justify-content: space-between;
`

const YellowButton = styled.button`
  background: #ffd7488f;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  font-family: 'Calibri';
  height: 44.44px;
  padding: 0 20px;
  cursor: pointer;
  margin: 50px 0;
  color: #423f458f;

  :hover {
    opacity: 1;
  }
`

const ActiveYellowButton = styled.button`
background: #000000;
`


const Button = styled.button`
  background: #38DF7A;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  align-items: center;
  color: #FFFFFF;
  width: 260px;
  height: 60px;
  border: none;
  cursor: pointer;
  // margin: 52px auto;

  :hover {
    background: #2ac066;
  }
`
const Slider = styled.input`
  width: 100%;
  height: 21px;
  border-radius: 10px;
  background: #FFD748;
  outline: none;
  opacity: 0.7;
  -webkit-appearance: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #104987;
    cursor: pointer;
  }
  
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #07315e;
    cursor: pointer;
  }
`

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  padding-left: 5px;
  margin: 0;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`
const SlideContainer1 = styled.div`
  width: 366px;
`
const SlideContainer2 = styled.div`
  width: 531px;
`
const ASCENDING = 'ascending';
const DESCENDING = 'descending';

export const Start = () => {

  const [data, setData] = useState({
    numberOfItems: 2,
    valueOfItems: 'A',
    orderOfCalculation: ASCENDING,
  });

  const onChangeNumberOfItems = e => {
    setData({
      ...data,
      numberOfItems: e.target.value
    })
  };

  const onChangeValueOfItems = e => {
    setData({
      ...data,
      valueOfItems: e.target.value
    })
  };

  const onClick = e => {
    console.log(e.target)
    if (e.target.id == ASCENDING) {
      e.target.style.background = '#FFD748';
      e.target.style.color = '#000000';
      document.getElementById('descending').style.background = '#ffd7488f';
      document.getElementById('descending').style.color = '#423f458f';
      setData({
        ...data,
        orderOfCalculation: ASCENDING
      })
    }
    if (e.target.id == DESCENDING) {
      e.target.style.background = '#FFD748';
      e.target.style.color = '#000000';
      document.getElementById('ascending').style.background = '#ffd7488f';
      document.getElementById('ascending').style.color = '#423f458f';
      setData({
        ...data,
        orderOfCalculation: DESCENDING
      })
    }
  };

  function getRandomPage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onSubmitData = e => {
    const arrPage = [
      <Buns />,
      <Flowers />,
      <Coins />,
      <ChristmasToys />,
    ];
    console.log(arrPage[getRandomPage(1, 4)]);
    return (
      <>
        arrPage[getRandomPage(1, 4)]
      </>
    )
  }

  console.log(data);
  return (
    <ContainerStart>
      <BorderBlock>
        <H3>Количество предметов</H3>

        <SlideContainer1>
          <label for="rangeNumberOfItems">
            <Ul>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </Ul>
          </label>
          <Slider
            type="range"
            min="2"
            max="5"
            value={data.numberOfItems}
            step="1"
            id="rangeNumberOfItems"
            list="labelsNumberOfItems"
            onChange={onChangeNumberOfItems}
          />
          <datalist id="labelsNumberOfItems">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </datalist>
        </SlideContainer1>

        <h3>Значения</h3>

        <SlideContainer2>
          <label for="rangeValueOfItems">
            <Ul>
              <li>A</li>
              <li>9</li>
              <li>19</li>
              <li>50</li>
              <li>99</li>
              <li>999</li>
            </Ul>
          </label>
          <Slider
            type="range"
            value={data.valueOfItems}
            step="1"
            id="rangeValueOfItems"
            list="labelsValueOfItems"
            onChange={onChangeValueOfItems}
          />
          <datalist id="labelsValueOfItems">
            <option>A</option>
            <option>9</option>
            <option>19</option>
            <option>50</option>
            <option>99</option>
            <option>999</option>
          </datalist>
        </SlideContainer2>

        <ContainerYellowButton>
          <YellowButton
            id='ascending'
            onClick={onClick}
            style={{ background: '#FFD748', color: '#000000' }}
          >
            По возрастанию
          </YellowButton>
          <YellowButton
            id='descending'
            onClick={onClick}
          >
            По убыванию
          </YellowButton>
        </ContainerYellowButton>

        <div>
          <Button onClick={onSubmitData} >Играть</Button>
        </div>
      </BorderBlock>
    </ContainerStart>
  )
};
