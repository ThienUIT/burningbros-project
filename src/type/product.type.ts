export type ProductType = {
    title: string
    price: number,
    thumbnail: string,
    brand: string,
    discountPercentage: number
}

export type LoaderProductType = {
    products: ProductType[]
}

export type Pagination = {
    limit: number,
    skip: number
}