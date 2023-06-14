import { styled } from 'styled-components'
import { theme } from '..'

export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  gap: 4rem;

  max-width: 1180;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 576px;
  height: 656px;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${theme.fontSizes['2xl']};
    color: ${theme.colors.gray300};
  }

  span {
    margin-top: 1rem;
    display: block;
    font-size: ${theme.fontSizes['2xl']};
    color: ${theme.colors.gray300};
  }

  p {
    margin-top: 2.5rem;
    font-size: ${theme.fontSizes.md};
    line-height: 1.6;
    color: ${theme.colors.gray300};
  }

  button {
    margin-top: auto;
    background-color: ${theme.colors.green500};
    color: ${theme.colors.white};
    border-radius: 8px;
    border: 0;
    padding: 1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: ${theme.fontSizes.md};

    &:hover {
      background-color: ${theme.colors.green300};
    }
  }
`
