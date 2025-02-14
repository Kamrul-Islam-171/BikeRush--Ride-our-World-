import { TQueryParams } from "../../../types/global";
import { baseApi } from "../../api/baseApi";


const customerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        
        getAllCustomers: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if(args) {
                    args.forEach((item : TQueryParams) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: '/users/all-customers',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ["customerStatus"]
        }),

        blockUnblockCustomer: builder.mutation({
            query: ({id, queryParams}) => {
                // console.log({queryParams})
                const params = new URLSearchParams();
                if(queryParams) {
                    queryParams.forEach((item : TQueryParams) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: `/users/${id}`,
                    method: 'PATCH',
                    params: params
                }
            },
            invalidatesTags:["customerStatus"]
        }),

        
    })
})

export const {useGetAllCustomersQuery, useBlockUnblockCustomerMutation} = customerApi;