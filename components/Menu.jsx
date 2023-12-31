import React from 'react'
import Link from "next/link";
import{ BsChevronDown } from "react-icons/bs";
import internal from 'stream';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Store", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
    { id: 4, name: "Log-in", url: "/login" },
];

const subMenuData = [
    { id: 1, name: "Tools", doc_count: 11 },
    { id: 2, name: "Drones", doc_count: 8 },
    { id: 3, name: "Cameras", doc_count: 64 },
    { id: 4, name: "Acessories", doc_count: 107 },
];

const Menu = ({showCatMenu, setShowCatMenu}) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black '>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li 
                            className='cursor-pointer flex itens-center gap-2 relative'
                            onMouseEnter={()=> setShowCatMenu(true)}
                            onMouseLeave={()=> setShowCatMenu(false)}
                            >
                            {item.name}
                            <BsChevronDown size={14} />
                            {showCatMenu && (
                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black   shadow-lg'>
                                    {subMenuData.map((submenu) => {
                                        return (
                                            <Link key={submenu.id} href="/" onClick={()=> setShowCatMenu(false)}>
                                                    <li className='h-12 flex justify items-center px-3 rounded-md hover:opacity-75'>
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
                        <li className="cursor-pointer ">
                            <Link href={item?.url}>
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

export default Menu;
