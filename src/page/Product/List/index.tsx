import { Input } from "../../../component/Input";
import { ProductCard } from "../../../component/ProductCard";
import { Spacing } from "../../../component/Spacing";
import { MainTitle, Title } from "../../../component/Typograph";
import { ListWrapper, ProductListWrapper } from "./styles";

export const ProductList = () => {
  const products = [];

  for (let i = 1; i <= 30; i++) {
    const product = {
      name: `Produto ${i}`,
      value: i * 10, // Valor de exemplo, você pode ajustar conforme necessário
      description: `Descrição do Produto ${i}`,
    };
    products.push(product);
  }
  return (
    <ListWrapper>
      <Spacing top={50} />
      <MainTitle>Produtos</MainTitle>
      <Spacing bottom={50} />
      <Input placeholder="Digite para buscar" label="Buscar" />
      <Spacing bottom={50} />

      <ProductListWrapper>
        {products?.map((product, i) => <ProductCard {...product} key={i} />)}
      </ProductListWrapper>
    </ListWrapper>
  );
};
