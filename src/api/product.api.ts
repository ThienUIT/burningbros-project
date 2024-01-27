import httpClient from "./index";
import { ProductsResponse } from "../type/product.type.ts";
import { Pagination } from "../type/common.type.ts";

const productPath = "/products";
export const ProductService = {
  getProductList: async ({
    limit = 20,
    skip,
  }: Pagination): Promise<ProductsResponse> => {
    const query = `limit=${limit}&skip=${skip}`;
    const selectedFields = "title,price,thumbnail,brand,discountPercentage,id";
    try {
      return await httpClient.get(
        `${productPath}?${query}&select=${selectedFields}`,
      );
    } catch (error) {
      throw new Error(String(error));
    }
  },
  searchProduct: async (searchTerm: string) => {
    const query = `q=${searchTerm}`;
    try {
      return await httpClient.get(`${productPath}/search/?${query}`);
    } catch (error) {
      throw new Error(String(error));
    }
  },
};
