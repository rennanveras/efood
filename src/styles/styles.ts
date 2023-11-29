import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  whatcolor: 'white' | 'pink'
}

export const colors = {
  lightPink: '#E66767',
  Lightbeige: ' #FFF8F2',
  cream: '#FFEBD9',
  white: '#FFFFFF'
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
      @media (max-width: 1024px) {
        padding: 0 20px;
      }
    }
  }
`

export const Title = styled.h2<Props>`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${(props) =>
    props.whatcolor === 'white' ? colors.white : colors.lightPink};
`