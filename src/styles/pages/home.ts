import styled from 'styled-components'
import { theme } from '..'

export const HomeContainer = styled.main`
  display: flex;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  width: 100%;
  margin-left: auto;
  min-height: 656px;
`

export const Product = styled.a`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-width: 540px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.6);

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    strong {
      font-size: ${theme.fontSizes.lg};
    }

    span {
      font-size: ${theme.fontSizes.xl};
      font-weight: bold;
      color: ${theme.colors.green300};
    }
  }

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`
