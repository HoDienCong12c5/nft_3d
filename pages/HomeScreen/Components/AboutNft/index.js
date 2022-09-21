import React from 'react'
import styled from 'styled-components'
const StatContainer = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 16px;
  padding: 26px;
  height: 100%;
  width: 100%;
  flex-flow: column wrap;
  display: flex;
  gap: 16px;
`
const Title = styled.div`
  transform: uppercase;
`
const Description = styled.div`
  color: #ffff;
`
const AboutNft = ({ description = '', children, title = 'About' }) => {
  return (
    <StatContainer>
      <Title>{title?.toUpperCase()}</Title>
      <Description>
        {description}
        {children}
      </Description>
    </StatContainer>
  )
}

export default AboutNft
