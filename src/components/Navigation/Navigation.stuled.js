import styled from "styled-components";
import { NavLink } from "react-router-dom";

// export const Conteiner = styled.div`
// display: flex;
//   gap: 30px;`

export const Link = styled(NavLink)`

padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #2F70AF;
  }
`;