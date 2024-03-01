import { ProductRepository } from "../repository/product/product.repository";
import { ProfileRepository } from "../repository/profile/profile.repository";
import { ProductService } from "./product/product.service";
import { ProfileService } from "./profile/profile.service";

export const profileService = new ProfileService(new ProfileRepository());

export const productService = new ProductService(new ProductRepository());
