import {baseApi} from "@/shared/api/baseApi.ts";
import type {CourseLikeResponse} from "@/entities/like/like.ts";

export const comingSoonApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLikes: builder.query<CourseLikeResponse, string>({
            query: (slug) => `public/coming-soon/${slug}/likes`,
            providesTags: (_result, _error, slug) => [{ type: 'CourseLike', id: slug }],
        }),

        toggleLike: builder.mutation<CourseLikeResponse, string>({
            query: (slug) => ({
                url: `public/coming-soon/${slug}/like`,
                method: "POST",
            }),
            invalidatesTags: (_result, _error, slug) => [{ type: 'CourseLike', id: slug }],
        }),
    }),
})

export const { useGetLikesQuery, useToggleLikeMutation } = comingSoonApi