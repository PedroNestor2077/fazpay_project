import { useCallback, useState } from "react";
import { Button } from "../../component/Button";
import { Input } from "../../component/Input";
import { Spacing } from "../../component/Spacing";
import { Title } from "../../component/Typograph";
import { FormWrapper, LoginWrapper } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailIsValid = useCallback(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, [email]);

  return (
    <LoginWrapper>
      <Title>Login</Title>
      <Spacing bottom={24} />
      <FormWrapper>
        <Input
          placeholder="Digite o e-mail"
          label="E-mail"
          name="email"
          type="email"
          onValueChange={setEmail}
          error={(!emailIsValid() && "E-mail inválido.") || undefined}
        />

        <Spacing top={24} />

        <Input
          placeholder="Digite a senha"
          label="Senha"
          name="password"
          type="password"
          onValueChange={setPassword}
        />

        <Spacing top={24} />

        <Button disabled={!password || !email}>Entrar</Button>
      </FormWrapper>
    </LoginWrapper>
  );
};
