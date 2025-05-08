
import { Home, Search, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
}

function NavItem({ icon, isActive = false }: NavItemProps) {
  return (
    <button 
      className={cn(
        "flex-1 h-12 flex items-center justify-center",
        isActive ? "text-ai-blue" : "text-gray-500"
      )}
    >
      {icon}
    </button>
  );
}

export function NavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center">
      <NavItem icon={<Home size={24} />} />
      <NavItem icon={<Search size={24} />} />
      <NavItem icon={<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>} isActive={true} />
      <NavItem icon={<User size={24} />} />
      <NavItem icon={<Settings size={24} />} />
    </div>
  );
}
