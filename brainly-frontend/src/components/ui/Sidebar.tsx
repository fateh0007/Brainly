import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { Logo } from "../../icons/Logo";

export function Sidebar(){
    return <div>
        <div className="h-screen w-69  fixed left-0 top-0 bg-white pl-6">
            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-2 text-purple-700">
                <Logo/>
                </div>
                
                Brainly
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
                <SidebarItem text="YouTube" icon={<YoutubeIcon/>}/>
            </div>
        </div>
    </div>
}