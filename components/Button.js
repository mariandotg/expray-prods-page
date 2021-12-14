import styled from "styled-components";
import React from "react";

const ButtonComponent = styled.button`
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 8px 16px;
  border: none;
  border-radius: 50px;
  background-color: var(--secondary-color);
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  align-self: flex-end;
`;

const Button = ({ children }) => {
  return (
    <>
      <ButtonContainer>
        <ButtonComponent>{children.toUpperCase()}</ButtonComponent>
      </ButtonContainer>
    </>
  );
};

export default Button;
