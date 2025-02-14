export interface TUserDataType {
    key: string;
    name: string;
    email: string;
    isBlocked: boolean
  }

  export interface TCustomer {
    _id: string;
    name: string;
    email: string;
    isBlocked: boolean
  }

  export interface TCustomerResponse {
    data: {
      result: TCustomer[];
    };
    meta: any;
  }

  export type TUserRole = {
    id: string;
    role:string;
    iat: number;
    exp:number;
  }
  