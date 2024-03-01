import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const App = styled.div`
  min-height: 100vh;
  max-width: 100vw;

  @media ${breakpoints.mobile} {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const InlineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
