import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

import { NavLink } from "react-router-dom";
const Nabbar = () => {
    const user=1;
  const navlink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Add Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="font-kanit bg-[#c8d6e5]">
      <Navbar>
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit text-[#5f27cd] md:text-3xl">Simple Blog</p>
          </Link>
        </NavbarBrand>

        <NavbarContent className="md:flex hidden gap-4" justify="center">
          {navlink}
        </NavbarContent>

        {
            user?<NavbarContent as="div" justify="end" className="">
            
            <Dropdown placement="bottom" className="border border-2-red md;p-4 p-2 shadow-lg">
              <DropdownTrigger>
                <Avatar
                 referrerPolicy="no-referrer"
                  isBordered
                  as="button"
                  className="transition-transform "
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  
                />
                
              </DropdownTrigger>
              <DropdownMenu className="" aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem href="/" key="Home">
                  Home
                </DropdownItem>
                <DropdownItem href="/addblogs" key="Add Blogs">
                  Add Blogs
                </DropdownItem>
                <DropdownItem href="/allblogs" key="All Blogs">
                  All Blogs
                </DropdownItem>
                <DropdownItem href="/featuredblog" key="Featured Blog">
                  Featured Blog
                </DropdownItem>
                <DropdownItem href="/wishlist" key="Wishlist">
                  Wishlist
                </DropdownItem>
  
               <DropdownItem key="logout" className="bg-[#00d2d3] text-white" color="danger">
                  {
                      user?<Link href="/logout"><Button color="danger" >Logout</Button></Link>:<Link href="/login"><Button color="danger">Login</Button>
                      </Link>                }
                </DropdownItem>
               
                    {
                        user?<DropdownItem ></DropdownItem>:<DropdownItem className="bg-[#00d2d3] text-white" color="danger"><Link href="/registation"><Button>Registation</Button></Link></DropdownItem>
                    }
               
               
              </DropdownMenu>
            </Dropdown>
            <Link href="/logout" className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#a29bfe] hover:text-[#F1EEDC] "><Button >Logout</Button></Link>
          </NavbarContent>:<NavbarContent justify="end">
            <Link className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#a29bfe] hover:text-[#F1EEDC] " href="/login"><Button>Login</Button></Link>
          <Link href="/registation" className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#a29bfe] hover:text-[#F1EEDC] ">  <Button>Registaion</Button></Link>
          </NavbarContent>
        }
      </Navbar>
    </div>
  );
};

export default Nabbar;
