import { useCallback, useState } from "react";
import { Button } from "../../component/Button";
import { Input } from "../../component/Input";
import { Spacing } from "../../component/Spacing";
import { Paragraph, Title } from "../../component/Typograph";
import { FormWrapper, LoginWrapper } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { profileService } from "../../service";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigator = useNavigate();
  const handleLogin = async () => {
    const profile = await profileService.getByEmail(email);
    // 100% Seguro
    if (
      profile?.data[0]?.email === email &&
      profile?.data[0]?.password === password
    )
      navigator("/products");

    setEmail("");
    setPassword("");
  };

  return (
    <LoginWrapper>
      <Title>Login</Title>
      <Spacing bottom={24} />
      <FormWrapper>
        <Input
          value={email}
          placeholder="Digite o e-mail"
          label="E-mail"
          name="email"
          type="email"
          onValueChange={setEmail}
        />

        <Spacing top={24} />

        <Input
          value={password}
          placeholder="Digite a senha"
          label="Senha"
          name="password"
          type="password"
          onValueChange={setPassword}
        />

        <Spacing top={24} />

        <Button disabled={!password || !email} onClick={handleLogin}>
          Entrar
        </Button>
        <Spacing top={24} />
        <Paragraph>
          Não possui uma conta? <Link to={"/singup"}>Cadastrar</Link>
        </Paragraph>
      </FormWrapper>
    </LoginWrapper>
  );
};
