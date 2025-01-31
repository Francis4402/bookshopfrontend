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
        }),
        getSingleBook: builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TBookstypes>) => {
                return response.data;
            }
        }),
        updateBook: builder.mutation({
            query: ({ id, data }) => ({
              url: `/products/${id}`,
              method: 'PUT',
              body: data,
            }),
          }),
        deleteBooks: builder.mutation({
            query: (args) => ({
                url: `/products/${args.id}`,
                method: "DELETE",
                body: args.data,
            })
        }),
        
    })
});

export const { useGetAllBooksQuery, useAddBooksMutation, useGetSingleBookQuery, useUpdateBookMutation, useDeleteBooksMutation } = bookManagementApi;