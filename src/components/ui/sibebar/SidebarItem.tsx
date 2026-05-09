import Link from "next/link";
import { IconType } from "react-icons";

type SidebarItemProps = {
  href: string;
  icon: IconType;
  label: string;
  onClick?: () => void;
};

export function SidebarItem({
  href,
  icon: Icon,
  label,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="ml-2">{label}</span>
    </Link>
  );
}
