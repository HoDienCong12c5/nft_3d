import React from 'react'
import { Spin } from 'antd'
const loader = () => {
  return (
    <ContainerLoading>
            <Spin
              size="large"
              style={{ marginTop: '30%' }}
              indicator={antIcon}
            />
          </ContainerLoading>
  )
}

export default loader
const ContainerLoading = styled.div`
  position: absolute;

  --color: white; /* color */
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  border: ${(props) => (props.border ? '1px solid var(--color)' : 'none')};
  border-radius: 16px;
  margin-top: ${(props) => (props.border ? '26px' : '0px')};
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
  }
  gap: 20px;
`