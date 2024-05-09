import { Home, Search, Activity, ImagePlus, Users, User } from "lucide-react";

export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
    icon: <Home size={24} />,
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
    icon: <Search size={24} />,
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
    icon: <Activity size={24} />,
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
    icon: <ImagePlus size={24} />,
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
    icon: <Users size={24} />,
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
    icon: <User size={24} />,
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
