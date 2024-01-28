import { Pagination } from "./common.type.ts";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  discountPercentage: number;
};

export type ProductsResponse = {
  products: ProductType[];
} & Pagination;
