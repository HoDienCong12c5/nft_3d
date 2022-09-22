import React from 'react'
import styled from 'styled-components'
import {data} from '../NftDetails/data'
const MoreCollection = ({src, onCLick, list}) => {
  return (
    <div style={{paddingLeft:5, paddingTop:15}} >
 <Container>
      <Title >
      MORE FROM THIS COLLECTION
      </Title>
      <ListMore >
        {
          data.listMore.map((item)=>(
            <ImageNft key={item.key} src={item.img} onClick={()=>onCLick(item.key)}/>
          ))
        }
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
 /* display: flex;  */
 flex-flow: row wrap;
 gap:16px; 
 overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;

`
const ImageNft = styled.img`
margin: 5px;
max-width: 200px;
max-height: 280px;
@media screen and (max-width: 768px) {
  max-width: 150px;
max-height: 200px;
  }
  cursor: pointer;
`