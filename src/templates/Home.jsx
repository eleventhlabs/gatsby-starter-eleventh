import styled from '@emotion/styled'
import React from 'react'

import { Template } from '../components'

const Home = () => (
  <Template
    description="Lorem ipsum dolor sit amet."
    title="Title"
  >
    <Divider />
    <Title>Title</Title>
    <Description>Lorem ipsum dolor sit amet.</Description>
  </Template>
)

export default Home

const Divider = styled.hr`
  border-style: solid;
  border-color: ${props => props.theme.colors.accent100};
`

const Title = styled.h1`
  font-weight: bold;
`

const Description = styled.p`
  font-style: italic;
`
