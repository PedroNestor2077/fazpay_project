import { Button } from "../Button";
import { Label, Typograph } from "../Typograph";
import colors from "../colors";
import { InputWrapper, StyledInput } from "./styles";

interface Props {
  placeholder?: string;
  name?: string;
  label?: string;
  onValueChange?: (v: any) => void;
  error?: string;
  value?: string;
  type?: string;
}

export const Input = ({ label, onValueChange, error, ...props }: Props) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput
        {...props}
        onChange={(e) => onValueChange && onValueChange(e?.target?.value)}
      />
      {error && <Label color={colors.ligthRed}>{error}</Label>}
    </InputWrapper>
  );
};
