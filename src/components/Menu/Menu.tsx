import "./styles.scss";
import cn from "classnames";

import CalendarIcon from "./icons/calendar.svg?react";
import ListIcon from "./icons/list.svg?react";
import ContainerIcon from "./icons/container.svg?react";
import UsersIcon from "./icons/users.svg?react";
import PaymentIcon from "./icons/payment.svg?react";
import ReportIcon from "./icons/report.svg?react";
import SettingsIcon from "./icons/settings.svg?react";

const MENU = [
  { icon: <CalendarIcon />, isActive: false },
  { icon: <ListIcon />, isActive: false },
  { icon: <ContainerIcon />, isActive: false },
  { icon: <UsersIcon />, isActive: false },
  { icon: <PaymentIcon />, isActive: false },
  { icon: <ReportIcon />, isActive: true },
  { icon: <SettingsIcon />, isActive: false },
];

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {MENU.map((item, i) => (
          <li
            key={i}
            className={cn("menu__list-item", {
              "menu__list-item--active": item.isActive,
            })}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
