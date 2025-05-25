import Link from "next/link";
import { Button } from "./ui/button";
import { Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navbar = () => {
  return (
    <nav className="text-foreground flex items-center" suppressHydrationWarning>
      <ul className="flex items-center">
        <li>
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/properties">Properties</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/properties/add">Add Property</Link>
          </Button>
        </li>
      </ul>
      <div className="flex items-center space-x-1 mr-2">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/register">Register</Link>
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Bell className="size-6 mt-1" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User className="size-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Properties</DropdownMenuItem>
            <DropdownMenuItem>Saved</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default navbar;
