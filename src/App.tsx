import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/app.router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "./components/ui/sonner"

const queryClient = new QueryClient()


const AirportsApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors/>
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  )
}

export default AirportsApp
