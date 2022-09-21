import styled from 'styled-components'
import Button from '../Components/Button'
export const MainContainer = styled.div`
  width: 100%;
  height:100%;
  /* background: rgba(0, 0, 0, 1); */
  min-height: calc(100vh - 50px);
  color: white;
  max-width: 1550px;
  margin: 0 auto;
  background-size: 100%;
  @media screen and (max-width: 1700px) {
    max-width: 1350px;
    padding: 0px 50px 50px 50px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
    padding: 0px 0px 20px 0px;
  }
  padding-bottom: 50px;
`

export const DetailsContainer = styled.div`
  background-image: url('khung.png');
  background-size: contain;
  align-items: 'center';
  height:${props => `${props.height-1}px`};
  width: ${props => `${props.height }px`};
`

export const LeftDetailsContainer = styled.div`
  width: 38%;
  display: flex;
  flex-flow: column wrap;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RightDetailsContainer = styled.div`
  width: 62%;
  display: flex;
  flex-flow: column wrap;
  padding-left: 26px;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0px;
  }
`

export const BackContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 26px;
  display: flex;
  align-items: center;
  button {
    background: none;
    border: none;
    outline: none;
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 0px;
    img {
      height: auto;
      margin-right: 10px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
    padding-bottom: 20px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  /* gap: 20px; */
  height: inherit;
  justify-content: space-around;
  padding: 0px 0px 15px 0px;
  img {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 0px;
  }
`

export const NftName = styled.div`
  padding-top: 16px;
`

export const NftId = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`

export const BuyButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #1877f2;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  transition: opacity 0.25s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  }
`

export const PriceContainer = styled.div`
  border: 1px solid white;
  padding: 26px;
  border-radius: 16px;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-flow: column wrap;
    gap: 13px;
  }
`

export const LeftPriceContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  letter-spacing: 1px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
  display: flex;
`

export const RightPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const TokenOption = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ffff;
  box-sizing: border-box;
  font-size: 12px;
  padding: 12px;
  &:nth-child(1) {
    border-radius: 5px 0px 0px 5px;
  }
  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  &:hover {
    border: 1px solid white;
  }
  &.selected {
    background: white;
    color: black;
    animation: fill 0.25s ease;
    @keyframes fill {
      from {
        color: white;
        background: transparent;
      }
      to {
        color: black;
        background: white;
      }
    }
  }
`

export const Owner = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 15px;
  &.last {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`

export const OwnerTitle = styled.div`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  letter-transform: uppercase;
  font-size: 12px;
  padding-bottom: 2px;
`
export const OwnerName = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: white;
  &.link {
    cursor: pointer;
    &:hover {
      color: #1877f2;
    }
  }
`

export const CustomTooltip = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #1877f2;
  .text {
    color: #1877f2;
  }
  .tooltip-price {
    display: flex;
    flex-flow: row wrap;
    img {
      width: 20px;
      height: 20px;
    }
    color: black;
    p {
      height: 20px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
`

export const BigTitle = styled.div`
  width: 100%;
  height: 60px;
  background: #1c1f25;
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  font-weight: bold;
  font-size: 26px;
  display: flex;
  height: 80px;
  align-items: center;
  padding-left: 30px;
  border-radius: 10px;
`

export const Quantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 130px;
  border-radius: 6px;
  height: 50px;
  img {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
  }
`

export const QuantityInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 6px;
  background: transparent;
`

export const AdjustQty = styled.div`
  width: 25px;
  height: 50px;
  display: flex;
  flex-flow: column wrap;
  & > div {
    width: 100%;
    height: 50%;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0px 0px;
    background: white;
    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    img {
      width: 45%;
      height: 45%;
    }
    &.down {
      border-top: 0.5px solid rgba(0, 0, 0, 0.5);
      border-radius: 0px 0px 5px 5px;
      img {
        transform: rotate(180deg);
      }
    }
  }
`
export const PropertyContainer = styled.div`
  border: 1px solid white;
  border-radius: 16px;
  display: flex;
  flex-flow: column wrap;
  gap: 13px;
  width: 100%;
  margin-bottom: 20px;
`
export const Title = styled.div`
  margin-bottom: 10px;
`
export const Description = styled.div``
export const Link = styled.div`
  color: #c4a5f8;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const TextWarning = styled.div`
  color: red;
  text-align: start;
`
export const Margin = styled.div`
  margin: ${(props) => `${props.margin ?? 20}px`};
  margin-top: ${(props) => `${props.top ?? 20}px`};
  margin-bottom: ${(props) => `${props.bottom ?? 20}px`};
`

export const ButtonView3D = styled(Button)`
  max-width: 60%;
  border-radius: 8px;
  text-align: center;
  color: #BC9CF3;
  padding: 0px;
  @media screen and (max-width: 768px){
    font-size: 12px;
    min-width: auto !important;
  }
  @media screen and (max-width: 568px){
    font-size: 12px;
    min-width: auto !important;
    padding-bottom: 10px;
    height: auto;

  }
`
export const ContainerCharacter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width: 568px) {
    flex-flow: column wrap;
    align-items: center;
  }
`
export const RightChar = styled.div`
  width: 57%;
  /* display:none; */
@media screen and (max-width: 568px) {
  width: 100%;
  /* max-width: 568px; */
  }
`
const CanvasCustom= styled.div`
`
export default CanvasCustom
