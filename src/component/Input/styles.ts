import styled from "styled-components";

export const StyledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: calc(100% - 11px);
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex-direction: column;
`;
