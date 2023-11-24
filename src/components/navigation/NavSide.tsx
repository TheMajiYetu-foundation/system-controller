import { FiHome, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NavSide() {
  const routes = [
    {
      label:"Dashboard",
      path:"/",
      icon:<FiHome/>,

    },
    {
      label:"Control Board",
      path:"/control",
      icon:<FiTool/>,
      
    }
  ];
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
      <li className="flex justify-center items-center mb-3">
        <div className=" ">
          <img src="/images/logo.jpeg" alt="" className="h-20 w-20 object-cover rounded-full" />
        </div>
      </li>
      {
        routes.map((route,index)=>(
          <li key={index}>
            <Link to={route.path} className="flex" >
              <span className="text-lg font-bold">{route.icon}</span>
              <span className="ml-2 text-lg font-normal">{route.label}</span>
            </Link>
          </li>
      
        ))
      }
    </ul>
  
  </div>
  )
}
