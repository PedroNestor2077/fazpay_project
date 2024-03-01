import { useEffect, useState } from "react";
import { Button } from "../../../component/Button";
import { Input } from "../../../component/Input";
import { Spacing } from "../../../component/Spacing";
import { Title } from "../../../component/Typograph";
import { FormWrapper, ProductEditWrapper } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { productService } from "../../../service";

export type Product = {
  name: string;
  value: number;
  description: string;
  id?: number;
};

export const ProductEdit = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const navigator = useNavigate();
  const id = useParams().id;
  const getProduct = async () => {
    if (!id) return;
    const res = await productService.getById(Number(id));
    setProduct(res?.data);
  };

  const handleEdit = async () => {
    const res = await productService.update(Number(id), {
      name,
      description,
      value,
    });
    navigator("/products");
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (!product) return;
    setDescription(product.description);
    setName(product.name);
    setValue(product.value);
  }, [product]);

  return (
    <ProductEditWrapper>
      <Title>Editar Produto </Title>

      <Spacing bottom={24} />

      <FormWrapper>
        <Input
          value={name}
          placeholder="Digite o nome do produto"
          label="Nome"
          onValueChange={setName}
        />

        <Spacing top={24} />

        <Input
          value={description}
          placeholder="Digite a descrição"
          label="Descrição"
          onValueChange={setDescription}
        />

        <Spacing top={24} />

        <Input
          value={String(value)}
          placeholder="Digite o preço"
          label="Preço"
          type="number"
          onValueChange={setValue}
        />

        <Spacing top={24} />

        <Button disabled={!name || !description || !value} onClick={handleEdit}>
          Salvar
        </Button>
      </FormWrapper>
    </ProductEditWrapper>
  );
};
