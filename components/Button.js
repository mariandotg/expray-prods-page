import styled from "styled-components";
import React from "react";

const ButtonComponent = styled.button`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 8px 16px;
  border: none;
  border-radius: 50px;
  background-color: var(--secondary-color);
`;

const Button = ({ children }) => {
  return (
    <>
      <ButtonComponent>{children.toUpperCase()}</ButtonComponent>
    </>
  );
};

export default Button;
