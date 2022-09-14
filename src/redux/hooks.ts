import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

/**
 * `useAppDispatch` is a wrapper around `useDispatch` that allows us to use the `AppDispatch` type
 * instead of the default `Dispatch` type
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()
/* It's a type assertion. It's saying that `useAppSelector` is a `TypedUseSelectorHook<RootState>`
which is a type that `useSelector` is not. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector