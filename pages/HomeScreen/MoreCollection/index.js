import React from 'react'
import styled from 'styled-components'
const MoreCollection = ({src, onCLick}) => {
  return (
    <div style={{paddingLeft:5, paddingTop:15}} >
 <Container>
      <Title >
      MORE FROM THIS COLLECTION
      </Title>
      <ListMore >
        <ImageNft src={src} onClick={onCLick}/>
      </ListMore>
      </Container>
    </div>
   
  )
}

export default MoreCollection

const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
  cursor: pointer;
`
const Title = styled.div`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 15px;
`
const ListMore = styled.div`
 /* max-height: 180px; */
 width: 100%;
`
const ImageNft = styled.img`
max-width: 200px;
max-height: 280px;
@media screen and (max-width: 768px) {
  max-width: 150px;
max-height: 200px;
  }
`