import {
  Navbar,
  NavbarBrand,
  NavbarContent,
 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { useContext, useState } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Nabbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signOutproile } = useContext(AuthContext);
  // console.log(user);
console.log(isMenuOpen);
  const handleSignOut = () => {
    signOutproile();
  };
  const navlink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-[#00d2d3] border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-[#00d2d3] border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/addblog"}
        >
          Add Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-[#00d2d3] border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/allblogs"}
        >
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-[#00d2d3] border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/featuredblog"}
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-2 text-white rounded-lg bg-[#00d2d3] border border-b-4   "
              : "text-center  font-normal gap-6 text-[18px] "
          }
          to={"/wishlist"}
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );
  const menuItems = [
   navlink
  ];
  return ( loading?   <Spinner />: <Navbar  onMenuOpenChange={setIsMenuOpen}>
  <NavbarContent>
    <NavbarMenuToggle
      // aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="sm:hidden"
    />
    <NavbarBrand>
  <Link href="/">
    <p className="font-bold text-inherit text-[#14261C] text-xs md:text-3xl ">Simple Blog</p>
  </Link>
</NavbarBrand>
  </NavbarContent>

  <NavbarContent className="hidden sm:flex gap-4" justify="center">
   {navlink}
  </NavbarContent>
  <NavbarContent justify="end">
    {user ? (
      <div className="flex justify-center items-center gap-2 ">
        <Avatar
          referrerPolicy="no-referrer"
          isBordered
          as="button"
          className="transition-transform "
          color="secondary"
          name={user.name}
          size="sm"
          src={user.photoURL}
        />
        <Link className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#00d2d3] hover:text-[#F1EEDC] ">
          <Button onClick={handleSignOut} color="danger">
            Logout
          </Button>
        </Link>
      </div>
    ) : (
      <div className="flex justify-center  gap-2">
        <Link
          className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#00d2d3] hover:text-[#F1EEDC] "
          href="/login"
        >
          <Button>Login</Button>
        </Link>
        <Link
          href="/registation"
          className="bg-[#00d2d3] text-white rounded-lg  hover:bg-[#00d2d3] hover:text-[#F1EEDC] "
        >
          {" "}
          <Button>Signup</Button>
        </Link>
      </div>
    )}
  </NavbarContent>
  <NavbarMenu>
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
        onClick={()=>setIsMenuOpen(true)}
        // onMenuOpenChange={setIsMenuOpen(true)}>
          color={
            index === 2
              ? "primary"
              : index === menuItems.length - 1
              ? "danger"
              : "foreground"
          }
          className="w-full flex flex-col  gap-4"
          href={item}
          size="lg"
        >
          {item}
        </Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
</Navbar>
     
  
   
  );
};

export default Nabbar;
