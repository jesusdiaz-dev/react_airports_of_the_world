import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/app.router"

const AirportsApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default AirportsApp
