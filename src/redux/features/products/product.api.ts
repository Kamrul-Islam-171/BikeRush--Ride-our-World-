import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/product/add-new',
                method: "POST",
                body: data
            })
        }),
        getAllProduct: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();
                if(args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: '/product/get-all-products',
                    method: 'GET',
                    params: params
                }
            }
        })
        
    })
})

export const {useAddProductMutation, useGetAllProductQuery} = productApi;