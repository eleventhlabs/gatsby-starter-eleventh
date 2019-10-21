import styled from '@emotion/styled'
import React from 'react'

import { Template } from '../components'
import { Box, Button, Heading, Link, Paragraph, Separator } from '../components/base'

const Home = () => (
  <Template
    description="Lorem ipsum dolor sit amet."
    title="Title"
  >
    <HomeInner>
      <Accent />
      <Title>Title</Title>
      <Description>Lorem ipsum dolor sit amet.</Description>
      <Link
        href="https://google.com/"
      >
        <CallToAction>Button</CallToAction>
      </Link>
    </HomeInner>
  </Template>
)

export default Home

const HomeInner = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Accent = styled(Separator)`
  width: 100%;
  border-color: ${props => props.theme.colors.accent100};
`

const Title = styled(Heading)``

const Description = styled(Paragraph)`
  font-style: italic;
`

const CallToAction = styled(Button)`
  width: 120px;
`
