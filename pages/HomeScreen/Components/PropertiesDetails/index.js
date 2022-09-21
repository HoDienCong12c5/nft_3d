import React from 'react'
import styled from 'styled-components'


const PropertyContainer = styled.div`
  border: 1px solid white;
  display: flex;
  border-radius: 16px;
  flex-flow: column wrap;
`
const ListPropertyContainer = styled.div`
  padding: 26px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div``
const PropertyList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

const PropertyItem = styled.div`
  padding:10px;
  border: 1px solid white;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: white;
`
const PropertyDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
const DetailsTitle = styled.div`
color:#ffff;
`
const DetailsValue = styled.div`
  color: #c4a5f8;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const PropertiesDetails = ({ nftDetails, children, isMarketPlace = null, showDetails = true, isStore = false }) => {
  const roundingNumber = (amount) => {
    return Math.round((amount + Number.EPSILON) * 100) / 100
  }
  return (
    <PropertyContainer>
      <ListPropertyContainer>
        <Title>PROPERTIES</Title>
        <PropertyList>
          <PropertyItem
          >
            White
          </PropertyItem>
        </PropertyList>
      </ListPropertyContainer>
      { showDetails && <Line />}
      {showDetails &&
      <ListPropertyContainer>
        <Title>DETAILS</Title>
        {/* <PropertyDetails>
          <DetailsTitle>Contract Address </DetailsTitle>
          <DetailsValue>
            {nftDetails?.contractAddress && ellipsisAddress(nftDetails?.contractAddress, 5, 4)}
          </DetailsValue>
        </PropertyDetails> */}


      </ListPropertyContainer>
      }

    </PropertyContainer>
  )
}

export default PropertiesDetails
