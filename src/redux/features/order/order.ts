import { baseApi } from "../../api/baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/orders",
                method: "POST",
                body: data,
            }),
        }),

        getOrders: builder.query({
            query: () => {
                return {
                    url: "/orders",
                    method: "GET",
                }
            }
        }),

        getRevenueData: builder.query({
            query: () => {
                return {
                    url: "/orders/revenue",
                    method: "GET",
                }
            },
        })
    })
});

export const { useCreateOrderMutation, useGetOrdersQuery, useGetRevenueDataQuery } = orderApi;