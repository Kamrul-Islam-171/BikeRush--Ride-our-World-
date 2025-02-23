import { TQueryParams } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrdersByEmail: builder.query({
      query: (args) => {
        // console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/product/orders/all-products`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["orderProduct"],
    }),
    getAllSuccessfullOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/product/order/all-orders`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["orderProduct"],
    }),

   
 

    
    // createPayment: builder.mutation({
    //   query: (data) => ({
    //     url: "/orders/create-payment",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags:["orderProduct", "singleProduct", "product"]
    // }),
  }),
});

export const {
 useGetAllOrdersByEmailQuery,
 useGetAllSuccessfullOrdersQuery
} = orderApi;
