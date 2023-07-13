import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BonusData } from '../types'

export const bonusApi = createApi({
    reducerPath: 'bonusApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.GET_BONUS_URL}`,
        prepareHeaders: (headers) => {
            headers.set('AccessKey', `${process.env.ACCESS_KEY}`);
            return headers;
        },
    }),
    endpoints(build) {
        return {
            getBonusInfo: build.query<BonusData, string>({
                query: (accessToken: string) => `/api/v3/ibonus/generalinfo/${accessToken}`,
            }),
        }
    }
});


export const { useLazyGetBonusInfoQuery } = bonusApi;
