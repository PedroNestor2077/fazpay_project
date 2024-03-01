import { useCallback, useState } from "react";
import { Button } from "../../component/Button";
import { Input } from "../../component/Input";
import { Spacing } from "../../component/Spacing";
import { Title } from "../../component/Typograph";
import { FormWrapper, SignUpWrapper } from "./styles";
import { profileService } from "../../service";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigator = useNavigate();

  const handleSignUp = async () => {
    await profileService.create({ email, password, name });
    navigator("/");
  };

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
