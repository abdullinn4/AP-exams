import {baseApi} from "@/shared/api/baseApi.ts";
import type {SystemNotification} from "@/entities/notifications/notifications.ts";

export const notificationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSystemNotifications: builder.query<SystemNotification[], void>({
            query: () => ({
                url: '/notifications/system',
            }),
        })
    }),
})

export const { useGetSystemNotificationsQuery } = notificationsApi
