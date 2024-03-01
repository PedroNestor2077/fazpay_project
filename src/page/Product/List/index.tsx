import { useEffect, useState } from "react";
import { InlineContainer } from "../../../component/App";
import { Input } from "../../../component/Input";
import { ProductList as ProductListComponent } from "../../../component/ProductList";
import { Spacing } from "../../../component/Spacing";
import { MainTitle, Title } from "../../../component/Typograph";
import { Product } from "../Edit";
import { ListWrapper, ProductListWrapper } from "./styles";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearch = (search: string) => {
    if (!search)
      return setProducts([
        { name: "teste", description: "descrição", value: 2 },
        { name: "search", description: "211", value: 3 },
      ]);
    return setProducts(
      products.filter(
        ({ name, description }) =>
          name.includes(search) || description.includes(search)
      )
    );
  };

  useEffect(() => {
    setProducts([
      { name: "teste", description: "descrição", value: 2 },
      { name: "search", description: "211", value: 3 },
    ]);
  }, []);

  return (
    <ListWrapper>
      <Spacing top={50} />
      <MainTitle>Produtos</MainTitle>
      <Spacing bottom={50} />

      <ProductListWrapper>
        <InlineContainer>
          <Input
            placeholder="Digite para buscar"
            label="Buscar"
            onValueChange={handleSearch}
          />
        </InlineContainer>
        <ProductListComponent products={products} />
      </ProductListWrapper>
    </ListWrapper>
  );
};
