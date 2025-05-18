import { Outlet } from "react-router"
import { AppSidebar } from "./components/app-sidebar"

const Layout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar — controls its own width */}
      <div className="h-full border-r">
        <AppSidebar />
      </div>

      {/* Main content takes remaining space */}
      <div className="flex-1 transition-all duration-300">
        <div className="p-5 bg-gray-100 h-full">
          <div className="p-2 w-full h-full shadow-sm rounded-sm bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
