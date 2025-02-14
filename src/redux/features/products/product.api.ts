import { TQueryParams } from "../../../types/global";
import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        
        getAllProduct: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();
                if(args) {
                    args.forEach((item : TQueryParams) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: '/product/get-all-products',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ["product", "deleteProduct", "createProduct"]
        }),

        addProduct: builder.mutation({
            query: (data) => ({
                url: '/product/add-new',
                method: "POST",
                body: data
            }),
            invalidatesTags:["createProduct"]
        }),

        updateProduct: builder.mutation({
            query: (args) => ({
                url: `/product/${args.id}`,
                method: "PATCH",
                body: args.data
            }),
            invalidatesTags: ["product"]
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
            
                url: `/product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["deleteProduct"]
        }),
        
    })
})

export const {useAddProductMutation, useGetAllProductQuery, useUpdateProductMutation, useDeleteProductMutation} = productApi;