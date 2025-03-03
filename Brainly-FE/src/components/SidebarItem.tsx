import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="rounded max-w-48 flex text-gray-700 py-1.5 pl-4 border-b border-gray-300 cursor-pointer hover:bg-gray-200 transition-all duration-150  ">
      <div className="pr-2">{icon} </div>
      <div className="">{text} </div>
    </div>
  );
}
