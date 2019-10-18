import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles'

const Home = () => (
  <div>
    <Helmet>
      <title>Title</title>
      <meta name="description" content="Lorem ipsum dolor sit amet." />
      <meta charSet="utf-8" />

      <meta property="og:title" content="Title" />
      <meta property="og:description" content="Lorem ipsum dolor sit amet." />
      <meta property="og:type" content="website" />
    </Helmet>

    <h1>Title</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
)

export default Home
