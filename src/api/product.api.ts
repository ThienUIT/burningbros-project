import httpClient from './index';

const productPath = '/products';
export const ProductService = {
    getProductList: async () => {
        try {
            const response = await httpClient.get(productPath);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    },
    searchProduct: async (searchTerm: string) => {
        try {
            const response = await httpClient.get(`${productPath}/search/?q=${searchTerm}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}