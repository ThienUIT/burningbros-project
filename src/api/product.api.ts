import httpClient from './index';
import { LoaderProductType, Pagination } from "../type/product.type.ts";

const productPath = '/products';
export const ProductService = {
    getProductList: async ({limit = 20, skip}: Pagination): Promise<LoaderProductType> => {
        const query = `limit=${limit}&skip=${skip}`;
        const selectedFields = 'title,price,thumbnail,brand,discountPercentage';
        try {
            return await httpClient.get(`${productPath}?${query}&select=${selectedFields}`);
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
    }
}

