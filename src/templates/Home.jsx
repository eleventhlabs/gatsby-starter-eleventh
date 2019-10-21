import styled from '@emotion/styled'
import React from 'react'

import Logo from '../assets/imgs/logo.inline.svg'
import { Template } from '../components'
import { Box, Button, Heading, Link, Paragraph } from '../components/base'

const Home = () => (
  <Template
    description="Lorem ipsum dolor sit amet."
    title="Title"
  >
    <HomeInner>
      <BrandLogo />
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

const BrandLogo = styled(Logo)`
  height: auto;
  width: 48px;

  path {
    fill: ${props => props.theme.colors.accent100};
  }
`

const Title = styled(Heading)``

const Description = styled(Paragraph)`
  font-style: italic;
`

const CallToAction = styled(Button)`
  width: 80px;
`
