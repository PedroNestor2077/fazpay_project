import { Product } from "../../page/Product/Edit";
import { ProductRepository } from "../../repository/product/product.repository";

export class ProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }
  async create(data: Product) {
    return this.repository.create(data);
  }

  async getAll() {
    return this.repository.getAll();
  }

  async getById(id: number) {
    return this.repository.getById(id);
  }

  async update(id: number, data: Product) {
    return this.repository.update(id, data);
  }
}
