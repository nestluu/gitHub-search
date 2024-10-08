import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { gitHubApi } from './api'
import { githubReducer } from './github.slice'

export const store = configureStore({
	reducer: {
		[gitHubApi.reducerPath]: gitHubApi.reducer,
		github: githubReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(gitHubApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
