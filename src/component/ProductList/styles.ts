import styled, { css } from "styled-components";

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const StyledTableData = styled.td`
  padding: 8px;
  text-align: left;
`;

export const StyledTableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
