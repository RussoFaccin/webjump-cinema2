import styled from "styled-components";
import { Breakpoints } from 'shared/enums';

export const Content = styled.main`
  max-width: 1000px;
  padding: 0 20px;
  margin: auto;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    padding: 0;
  }
`;
