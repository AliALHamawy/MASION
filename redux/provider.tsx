'use client'

import { useEffect } from 'react'
import {Provider} from 'react-redux'
import { store } from './store'
import { CURRENCIES, setCurrency, type CurrencyCode } from './slices/currencySlice'

export const ReduxProvider = ({children}: {children: React.ReactNode}) => {
    useEffect(() => {
        const savedCurrency = localStorage.getItem('app_currency') as CurrencyCode | null;

        if (savedCurrency && CURRENCIES[savedCurrency]) {
            store.dispatch(setCurrency(savedCurrency));
        }
    }, []);

    return <Provider store={store}>{children}</Provider>
}