import {baseApi} from "@/shared/api/baseApi.ts";
import type {MockExamDetails, MockExamsPreviewResponse, MockExamsResponse} from "@/entities/course/course.ts";

export const mockExamsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMockExams: builder.query<MockExamsResponse, string>({
            query: (courseSlug) => `/courses/${courseSlug}/mock-exams`,
            providesTags: (_result, _error, courseSlug) => [
                { type: 'Course', id: `mock-exams-${courseSlug}` }
            ],
        }),
        getMockExamDetails: builder.query<MockExamDetails, string>({
            query: (examId) => `/mock-exams/${examId}`,
            providesTags: (_result, _error, examId) => [
                { type: 'Course', id: examId }
            ],
        }),
        getMockExamsPreview: builder.query<MockExamsPreviewResponse, string>({
            query: (courseSlug) => `/public/courses/${courseSlug}/mock-exams`,
            providesTags: (_result, _error, courseSlug) => [
                { type: 'Course', id: `mock-exams-${courseSlug}` }
            ],
        })
    }),
})

export const { useGetMockExamsQuery, useGetMockExamDetailsQuery, useGetMockExamsPreviewQuery } = mockExamsApi
