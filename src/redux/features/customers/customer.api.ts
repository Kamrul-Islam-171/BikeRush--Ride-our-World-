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
        getSingleCustomer: builder.query({
            query: (email) => {
                return {
                    url: `/users/${email}`,
                    method: 'GET',
                }
            },
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
        changePassword: builder.mutation({
            query: (data) => {
                // console.log(data)
                return {
                    url: `/users/change-password`,
                    method: 'POST',
                    body: data
                }
            },
        }),


        
    })
})

export const {useGetAllCustomersQuery, useBlockUnblockCustomerMutation, useGetSingleCustomerQuery, useChangePasswordMutation} = customerApi;