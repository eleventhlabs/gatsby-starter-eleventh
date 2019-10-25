import styled from '@emotion/styled'
import React from 'react'

import Logo from '../assets/imgs/logo.inline.svg'
import { Template } from '../components'
import { Box, Button, calcTextStyle, Heading, Link, Paragraph } from '../components/base'

const Home = () => (
  <Template
    description="🌱 An opinionated Gatsby starter by Eleventh."
    title="gatsby-starter-eleventh"
  >
    <HomeInner>
      <Link
        display="block-zero"
        href="https://github.com/eleventhlabs/gatsby-starter-eleventh"
      >
        <BrandLogo />
      </Link>
      <Title>
        gatsby-starter-eleventh
      </Title>
      <Description>
        🌱 An opinionated Gatsby starter by Eleventh.
      </Description>
      <Link
        display="block"
        href="https://github.com/eleventhlabs/gatsby-starter-eleventh"
      >
        <CallToAction>
          Click Me
        </CallToAction>
      </Link>
    </HomeInner>
  </Template>
)

export default Home

/**
 * Styles
 */

const HomeInner = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 48px;
`

const BrandLogo = styled(Logo)`
  height: auto;
  width: 48px;
  margin-bottom: 16px;

  path {
    fill: ${props => props.theme.colors.gray100};
  }
`

const Title = styled(Heading)`
  ${props => calcTextStyle(props.theme.fonts.heading, {
    fontSize: 24, lineHeight: 1.5
  })}

  margin-bottom: 16px;
`

const Description = styled(Paragraph)`
  ${props => calcTextStyle(props.theme.fonts.body, {
    fontSize: 16, lineHeight: 1
  })}

  margin-bottom: 24px;
`

const CallToAction = styled(Button)`
  font-weight: bold;
  background: ${props => props.theme.colors.gray100};
`
