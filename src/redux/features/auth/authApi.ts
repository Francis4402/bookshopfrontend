import { TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";
import { TUser } from "./authSlice";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            })
        }),
        updateUser: builder.mutation({
            query: ({id, data}) => ({
                url: `/auth/users/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
        getSingleUser: builder.query({
            query: (id: string) => ({
                url: `/auth/users/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TUser[]>) => {
                return response.data;
            }
        }),
        getAllUsers:  builder.query({
            query: () => ({
                url: `/auth/users`,
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TUser[]>) => {
                return response.data;
            }
        }),
        blockUser: builder.mutation({
            query: ({id}) => ({
                url: `/auth/users/${id}/block`,
                method: 'PATCH',
                body: {isBlocked: true},
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateUserMutation, useGetSingleUserQuery, useGetAllUsersQuery, useBlockUserMutation } = authApi;