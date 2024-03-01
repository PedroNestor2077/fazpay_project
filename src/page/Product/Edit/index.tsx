import { useEffect, useState } from "react";
import { Button } from "../../../component/Button";
import { Input } from "../../../component/Input";
import { Spacing } from "../../../component/Spacing";
import { Title } from "../../../component/Typograph";
import { FormWrapper, ProductEditWrapper } from "./styles";

export type Product = {
  name: string;
  value: number;
  description: string;
};

export const ProductEdit = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<number>(0);

  const product: Product[] = [
    {
      name: "Produto",
      value: 2,
      description: "Descrição prodto",
    },
  ];

  return (
    <ProductEditWrapper>
      <Title>Editar Produto </Title>

      <Spacing bottom={24} />

      <FormWrapper>
        <Input
          placeholder="Digite o nome do produto"
          label="Nome"
          onValueChange={setName}
        />

        <Spacing top={24} />

        <Input
          placeholder="Digite a descrição"
          label="Descrição"
          onValueChange={setDescription}
        />

        <Spacing top={24} />

        <Input
          placeholder="Digite o preço"
          label="Preço"
          type="number"
          onValueChange={setValue}
        />

        <Spacing top={24} />

        <Button disabled={!name || !description || !value}>Salvar</Button>
      </FormWrapper>
    </ProductEditWrapper>
  );
};
