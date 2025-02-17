export interface TUserDataType {
  key: string;
  name: string;
  email: string;
  isBlocked: boolean;
}

export interface TCustomer {
  _id: string;
  name: string;
  email: string;
  isBlocked: boolean;
}

export interface TCustomerResponse {
  data: {
    result: TCustomer[];
  };
  meta: any;
}

export type TUserRole = {
  id: string;
  role: string;
  iat: number;
  exp: number;
};

export interface TOrderType {
  _id: string;
  key: string;
  name: string;
  email: string;
  product: {
    name: string;
    price: number;
    brand: string;
    category: string;
    image: string;
  };
  amount: number;
  delivered: string;
}
export interface TOrdersProType {
  key: string;
  name: string;
  email: string;
  productName: string;
  productImage: string;
  amount: number;
  delivered: string;
}

export interface TOrderResponse {
  data: {
    result: TOrderType[];
  };
  meta: any;
}
