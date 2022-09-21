import styled from 'styled-components'

const HomeContainer = styled.div`
  flex-flow: row wrap;
  justify-content: space-between;
  /* gap:30px; */
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    flex-flow: column wrap;
    gap: 30px;
  }
`
export const HomeInfor = styled.div`
  max-width: 30%;
  flex-flow: column wrap;
  gap: 20px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`
export const TitleInfor = styled.div`
  font-size: 42px;
`
export const Description = styled.div`
  line-height: 30px;
`
export const ProductMain = styled.div`
  width: 40%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const Element = styled.div`
  max-width: 30%;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 30px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-top: 0px;
  }
`
export const TitleSub = styled.div`
  font-size: 16px;
`
export const PriceBig = styled.div`
  font-size: 24px;
`
export const ImageBase = styled.img`
  width: 100%;
`
export const ImageMain = styled.img`
  border-radius: 50%;
`
export const Icon = styled(ImageBase)`
  width: 80px;
  height: 80px;
`
export const BtnBuy = styled.div`
  width: 80px;
  height: 80px;
`

export default HomeContainer
