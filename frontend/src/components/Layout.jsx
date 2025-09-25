import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen w-full">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Staff Manager
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="block p-2 rounded ">
            Employees
          </Link>
          <Link to="/tasks" className="block p-2 rounded ">
            Tasks
          </Link>
          <Link to="/reports" className="block p-2 rounded ">
            Reports
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Hello, Admin</span>
            <button className="px-3 py-1  text-white rounded">Logout</button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
