import { RouterProvider, createBrowserRouter } from "react-router"
import { SidebarProvider } from "./components/ui/sidebar"

type Props = {
  router: ReturnType<typeof createBrowserRouter>
}

export const Providers = ({ router }: Props) => {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  )
}
