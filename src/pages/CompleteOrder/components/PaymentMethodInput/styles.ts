import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};

      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  height: 3rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  transition: 0.4s;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`; 
