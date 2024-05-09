import { LogOut } from "lucide-react";

import { currentUser, SignedIn, SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AccountUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {userInfo ? (
            <AvatarImage src={userInfo?.image} />
          ) : (
            <AvatarImage src={user.imageUrl} />
          )}
          <AvatarFallback className="bg-gray-500"></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem className="cursor-pointer">
          <SignedIn>
            <SignOutButton>
              <div className="flex items-center justify-center cursor-pointer">
                <LogOut size={20} className="mr-2" />
                <p>Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default AccountUser;
