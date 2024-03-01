import styled from "styled-components";
import colors from "../colors";

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12;
  gap: 14px;
`;

export const ProductCardWrapper = styled.div`
  background-color: gray;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.grey4};
  padding: 12px;
`;

export const StyledImage = styled.img`
  border-radius: 8px;
`;
