import { Product } from "../../page/Product/Edit";
import { Display, Label } from "../Typograph";
import { formatToBRLCurrency } from "../../service/utils/formatCurrency";
import { InlineContainer } from "../App";
import { Spacing } from "../Spacing";
import { CardInfoWrapper, ProductCardWrapper, StyledImage } from "./styles";
import colors from "../colors";
export const ProductCard = ({ description, name, value }: Product) => {
  return (
    <ProductCardWrapper>
      <CardInfoWrapper>
        <InlineContainer>
          <Label>Nome:</Label>
          <Spacing right={5} />
          <Display color={colors.blue2}>{name} &#9998;</Display>
        </InlineContainer>
        <InlineContainer>
          <Label>Descrição:</Label>
          <Spacing right={5} />
          <Display>{description}</Display>
        </InlineContainer>
        <InlineContainer>
          <Label>Valor:</Label>
          <Spacing right={5} />
          <Display>{formatToBRLCurrency(value)}</Display>
        </InlineContainer>
      </CardInfoWrapper>
      <StyledImage src="https://picsum.photos/100" alt="Product" />
    </ProductCardWrapper>
  );
};
