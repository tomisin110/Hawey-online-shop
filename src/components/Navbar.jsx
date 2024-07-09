import {  navItems } from "../constants/index";


const Navbar = () => {
  return (
    <nav className="top-0 z-50 py-3 bg-gray-500 h-24">
        <div className="container px-4 mx-auto relative text-sm border">
        <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    
                    <span className="text-5xl tracking-tight text-white font-playfair font-bold ">HAWVEY</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index)=>(
                            <li key={index}>
                                <a className="text-white" href={item.href}>{item.label}</a>
                            </li>
                        ) )}

                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        
                    </div> 
                </div>
        </div>
    </nav>
  )
}

export default Navbar
