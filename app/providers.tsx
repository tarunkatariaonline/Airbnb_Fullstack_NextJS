// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import { store } from './redux/store'
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider> <Provider store={store}>{children} </Provider> </ChakraProvider>
}