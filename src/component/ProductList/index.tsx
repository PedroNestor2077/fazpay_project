import { Product } from "../../page/Product/Edit";
import { formatToBRLCurrency } from "../../service/utils/formatCurrency";
import {
  StyledTable,
  StyledTableBody,
  StyledTableData,
  StyledTableHead,
  StyledTableRow,
} from "./styles";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledTableData>Nome</StyledTableData>
          <StyledTableData>Descrição</StyledTableData>
          <StyledTableData>Preço</StyledTableData>
          <StyledTableData>Ações</StyledTableData>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {products?.map(({ name, description, value }) => (
          <StyledTableRow>
            <StyledTableData>{name}</StyledTableData>
            <StyledTableData>{description}</StyledTableData>
            <StyledTableData>{formatToBRLCurrency(value)}</StyledTableData>
            <StyledTableData>Editar</StyledTableData>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
