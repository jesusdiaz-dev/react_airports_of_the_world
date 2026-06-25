import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/app.router"

const AirportsApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default AirportsApp
