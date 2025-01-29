import { TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";
import { TBookstypes } from "./bookstypes";


const bookManagementApi =  baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/products',
                    method: 'GET',
                    params: params,
                }
            },
            transformResponse: (response: TResponseRedux<TBookstypes[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
        }),
        addBooks: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body: data,
            })
        })
    })
});

export const { useGetAllBooksQuery, useAddBooksMutation } = bookManagementApi;