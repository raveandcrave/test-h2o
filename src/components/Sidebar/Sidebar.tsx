import "./styles.scss";

import Menu from "@/components/Menu";
import LogoIcon from "../../icons/logo.svg?react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <LogoIcon width={64} />
      <Menu />
    </aside>
  );
};

export default Sidebar;
