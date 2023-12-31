import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightPink: '#E66767',
  Lightbeige: ' #FFF8F2',
  cream: '#FFEBD9',
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
      background-color: ${colors.Lightbeige};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      @media (max-width: ${breakPoints.desktop}) {
        max-width: 80%;
      }
    }
  }
`
