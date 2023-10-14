import styled, { css } from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  // width: ${(p) => p.width || "100px"}; 
  height: ${(p) => p.height || "30px"};
  color: ${(p) => p.color || "black"};
  ${(p) =>
    p.primary &&
    css`
      color: white;
      background: black;
    `}
`;

const Button = ({ onClick, children, color, width, height }) => {
  return (
    <StyledButton onClick={onClick} color={color} width={width} height={height}>
      {children}
    </StyledButton>
  );
};

export default Button;
