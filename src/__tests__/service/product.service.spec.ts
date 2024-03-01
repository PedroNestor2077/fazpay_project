import { Product } from "../../page/Product/Edit";
import { ProductService } from "../../service/product/product.service";

class MockProductRepository {
  async create(data: Product) {
    return Promise.resolve(data);
  }
  async getAll() {
    return Promise.resolve([]);
  }
  async getById(id: number) {
    return Promise.resolve(null);
  }
  async update(id: number, data: Product) {
    return Promise.resolve(data);
  }
}

describe("ProductService", () => {
  let productService: any;
  let productRepository: any;

  beforeEach(() => {
    productRepository = new MockProductRepository();
    productService = new ProductService(productRepository);
  });

  it("should create a product", async () => {
    const productData: Product = {
      id: 1,
      name: "Test Product",
      description: "description",
      value: 10,
    };

    const createdProduct = await productService.create(productData);
    expect(createdProduct).toEqual(productData);
  });

  it("should retrieve all products", async () => {
    const products = await productService.getAll();
    expect(products).toEqual([]);
  });

  it("should retrieve a product by id", async () => {
    const productId = 1;
    const product = await productService.getById(productId);
    expect(product).toBeNull();
  });

  it("should update a product", async () => {
    const productId = 1;
    const updatedProductData: Product = {
      id: productId,
      name: "Updated Product",
      description: "description",
      value: 10,
    };

    const updatedProduct = await productService.update(
      productId,
      updatedProductData
    );
    expect(updatedProduct).toEqual(updatedProductData);
  });
});
