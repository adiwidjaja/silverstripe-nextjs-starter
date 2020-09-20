import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../src/constants/themes/defaultTheme/defaultTheme';
import GlobalStyle from '../src/styles/globals';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
