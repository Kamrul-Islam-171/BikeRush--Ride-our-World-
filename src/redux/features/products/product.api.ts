import { TQueryParams } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        // console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/product/get-all-products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product", "deleteProduct", "createProduct", "orderProduct"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add-new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["createProduct"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["singleProduct", "orderProduct"],
    }),

    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/product/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["product", "singleProduct", "orderProduct"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteProduct"],
    }),

    createPayment: builder.mutation({
      query: (data) => ({
        url: "/orders/create-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["orderProduct", "singleProduct", "product"]
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useCreatePaymentMutation
} = productApi;
