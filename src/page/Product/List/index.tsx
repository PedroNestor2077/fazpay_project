import { useEffect, useState } from "react";
import { InlineContainer } from "../../../component/App";
import { Input } from "../../../component/Input";
import { ProductList as ProductListComponent } from "../../../component/ProductList";
import { Spacing } from "../../../component/Spacing";
import { MainTitle, Title } from "../../../component/Typograph";
import { Product } from "../Edit";
import { ListWrapper, ProductListWrapper } from "./styles";
import { productService } from "../../../service";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  const getProducts = async () => {
    const res = await productService.getAll();
    setProducts(res?.data);
  };

  const handleSearch = (): Product[] => {
    if (!search || search === "") return products;
    return products.filter(
      ({ name, description }) =>
        name.includes(search) || description.includes(search)
    );
  };

  useEffect(() => {
    getProducts();
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
            onValueChange={setSearch}
          />
        </InlineContainer>
        <ProductListComponent products={handleSearch()} />
      </ProductListWrapper>
    </ListWrapper>
  );
};
