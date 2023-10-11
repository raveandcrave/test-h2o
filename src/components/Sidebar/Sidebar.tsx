import "./styles.scss";

import LogoIcon from "../../icons/logo.svg?react";
import Menu from "../Menu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <LogoIcon width={64} />
      <Menu />
    </aside>
  );
};

export default Sidebar;
