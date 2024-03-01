import { useCallback, useState } from "react";
import { Button } from "../../component/Button";
import { Input } from "../../component/Input";
import { Spacing } from "../../component/Spacing";
import { Title } from "../../component/Typograph";
import { FormWrapper, SignUpWrapper } from "./styles";

export const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Name, setName] = useState<string>("");

  const emailIsValid = useCallback(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, [email]);

  const handleSignUp = () => {};

  return (
    <SignUpWrapper>
      <Title>Sign up</Title>
      <Spacing bottom={24} />
      <FormWrapper>
        <Input
          placeholder="Digite o nome"
          label="Nome"
          name="name"
          type="name"
          onValueChange={setName}
        />

        <Spacing top={24} />

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

        <Button disabled={!password || !email} onClick={handleSignUp}>
          Enviar
        </Button>
      </FormWrapper>
    </SignUpWrapper>
  );
};
