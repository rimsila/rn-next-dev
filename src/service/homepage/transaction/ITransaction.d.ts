declare namespace ITransactionAPI {
  //* ============= Product ================
  export type Product = {
    pagination: Pagination;
    data: Data;
    code: number;
  };

  interface Data {
    name: string;
    description: string;
    image: string;
    price: string;
    discount_amount: string;
    status: boolean;
    categories: Category[];
  }

  interface Category {
    id: number;
    name: string;
  }
  interface Pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
  }

  //* ============= User ================
  interface CreateUser {
    name: string;
    gender: string;
    email: string;
    status: string;
  }
}
