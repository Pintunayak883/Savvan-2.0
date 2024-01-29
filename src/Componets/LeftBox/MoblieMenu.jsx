import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Menudata from "../../Data/Menudata";
import { NavLink } from "react-router-dom";
export default function MobileMenu() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="md:hidden block w-screen">
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        >
          {Menudata.map((item, index) => (
            <NavLink key={index} to={item.path} className="mx-3">
              <BottomNavigationAction
                className="text-3xl"
                label={item.name}
                icon={item.icon}
              />
            </NavLink>
          ))}
        </BottomNavigation>
      </Box>
    </div>
  );
}
