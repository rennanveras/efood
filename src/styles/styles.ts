import { createGlobalStyle } from 'styled-components'

export const colors = {
  PrimaryColor: '#3a5a40',
  SecundaryColor: '#edede9',
  BackgroundColor: ' #f1f1f1',
  white: '#FFFFFF'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '520px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;

    body {
      background-color: ${colors.BackgroundColor};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      @media (max-width: ${breakPoints.desktop}) {
        max-width: 90%;
      }
    }
  }
`
