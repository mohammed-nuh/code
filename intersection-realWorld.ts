type ApiResponse = {
    status: number;
    message: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
};

type Category = {
    title: string;
    description: string;
};

type ApiResponseWithProductAndCategory = ApiResponse & {
    productInfo: Product;
    categoryInfo: Category;
};

let apires: ApiResponseWithProductAndCategory = {
    status: 200,
    message: "OK",
    productInfo: {
        id: 101,
        name: "Lenovo Thinkpad",
        price: 50000,
    },
    categoryInfo: {
        title: "Laptops",
        description: "Laptops are portable computers.",
    }
};

console.log(apires.productInfo.name)