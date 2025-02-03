/* eslint-disable react/prop-types */
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { seekerNavMenu } from "../../config";

const UserMenu = ({ user, userLogout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <UserAvatar avatar={user.avatar} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {seekerNavMenu.map((link) => {
          return (
            <Link to={link.href} key={link.href}>
              <DropdownMenuItem
                value={link.title}
                className="w-full cursor-pointer  capitalize"
              >
                {link.title}
              </DropdownMenuItem>
            </Link>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={userLogout}
          className="w-full cursor-pointer"
        >
          Logout
          <DropdownMenuShortcut>
            <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
