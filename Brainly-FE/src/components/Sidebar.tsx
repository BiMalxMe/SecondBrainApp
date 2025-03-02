import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export const Sidebar = () => {
    return <div className="h-screen bg-white border-r border-r-gray-300
 w-76 fixed top-0 left-0">
  <div className="flex items-center pl-4 text-2xl pt-10">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        <span>Brainly</span>
      </div>
    <div className="pt-8 pl-6">
    <SidebarItem text="Twitter" icon={<TwitterIcon size="lg" />} />
    <SidebarItem text="Youtube" icon={<YoutubeIcon size="lg" />} />

    </div>
    </div>
};