import { data } from './Data'
import { createBrowserRouter,RouterProvider } from "react-router-dom"


const View = () => {

    const routes = createBrowserRouter(data)
  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default View
