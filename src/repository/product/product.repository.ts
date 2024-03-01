import { Axios } from "../../config/axios";
import { Product } from "../../page/Product/Edit";

export class ProductRepository {
  private Axios = Axios;
  async create(data: Product) {
    return this.Axios.post("/product", data);
  }

  async getAll() {
    return this.Axios.get(`/products`);
  }

  async getById(id: number) {
    return this.Axios.get(`/products/${id}`);
  }

  async update(id: number, data: Product) {
    return this.Axios.put(`/products/${id}`, data);
  }
}
