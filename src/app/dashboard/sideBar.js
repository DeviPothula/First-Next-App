'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

//Since usePathname() is a hook, you'll need to turn sideBar.js into a Client Component. 
// Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:

const Sidebar = () => {
  const pathName = usePathname()
  console.log('pathname,,,', pathName)
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">My App</h1>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/customers">Customers</Link>
          </li>
          <li className={`p-4 hover:bg-gray-700`}>
            <Link href="/dashboard/invoices">Invoices</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
