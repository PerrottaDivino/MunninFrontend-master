import React from 'react'
import Link from "next/link";
import{ BsChevronDown } from "react-icons/bs";
import internal from 'stream';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Store", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Tools", doc_count: 11 },
    { id: 2, name: "Drones", doc_count: 8 },
    { id: 3, name: "Cameras", doc_count: 64 },
    { id: 4, name: "Acessories", doc_count: 107 },
];

const MenuMobile = ({showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] vg-white border-t text-black'>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li 
                            className='cursor-pointer py-4 px-5 border-b flex felx-col relative'
                            onClick={()=> setShowCatMenu(!showCatMenu)}                       
                            >
                                <div clasName="fex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                           
                            {showCatMenu && (
                                <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                    {subMenuData.map((submenu) => {
                                        return (
                                            <Link key={submenu.id} href="/" onClick={()=> {
                                                setShowCatMenu(false)
                                                setMobileMenu(false)
                                                    }
                                                }
                                            >
                                                    <li className='py-4 px-8 border-t flex justify-between'>
                                                        {submenu.name}
                                                        <span className='opacity-50 text-sm'>
                                                              - 63
                                                        </span>
                                                    </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="py-4 px-5 border-b">
                            <Link 
                                href={item?.url}
                                onClick={() => setMobileMenu(false)}
                            >
                                 {item.name}
                            </Link>                     
                        </li>
                    )}
                </React.Fragment>
            );
        })}
    </ul>
  );
};

export default MenuMobile;
