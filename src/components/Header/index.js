import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import Arrow from "../../assets/icons/arrow-up-right.png";
import Profile from "../../assets/images/profile.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleloggedIn = () => setLoggedIn(!loggedIn);

  const NavList = () => {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {/* <Button
          color="blue"
          variant="outlined"
          className="h-[40px]"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button> */}

        <Button
          variant="outlined"
          color="#164ED4"
          className="border-[#164ED4] text-[#164ED4] py-3 px-6 capitalize text-[16px]"
          onClick={() => {
            handleloggedIn();
            navigate("/auth");
          }}
        >
          Log In
        </Button>
        <button
          className="flex items-center gap-2 p-3 tracking-wide text-white transition-colors duration-200 transform bg-[#164ED4] rounded-md hover:bg-[#164ED4] focus:outline-none focus:bg-[#164ED4]"
          onClick={() => navigate("/signup")}
        >
          <span>Sign Up</span>
          <img src={Arrow} alt="arrow" width={20} />
        </button>
      </ul>
    );
  };
  return (
    <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 rounded-[0px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img
            src={Logo}
            alt="Logo"
            width={144}
            height={37}
            className="cursor-pointer"
            onClick={() => navigate("/home")}
          />
          <div className="hidden lg:block">
            {loggedIn ? (
              <Menu>
                <MenuHandler>
                  <img src={Profile} alt="profile" width={48} />
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={() => navigate("profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("membershipPlan")}>
                    Membership
                  </MenuItem>
                  <MenuItem onClick={() => navigate("paid-user")}>
                    Paid User
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <NavList />
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                class="h-8 w-8 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                class="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
