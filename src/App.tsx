import { App as StyledApp } from "./component/App";
import "./index.css";
import { ProductList } from "./page/Product/List";

function App() {
  return (
    <StyledApp>
      <ProductList />
    </StyledApp>
  );
}

export default App;
