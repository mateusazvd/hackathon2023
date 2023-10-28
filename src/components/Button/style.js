import styled from "styled-components";



export const Button = styled.button`
  width: ${(props) => props.width};
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;

  /* Adicione mais estilos conforme necessário */
`;