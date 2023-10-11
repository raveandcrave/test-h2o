import "./styles.scss";
import avatar from "./avatar.jpg";
import PlayArrowIcon from "../../icons/play-arrow.svg?react";
import DropdownIcon from "../../icons/dropdown.svg?react";

const Header = () => {
  return (
    <header className="header">
      <div className="tabs">
        <div className="tabs__buttons">
          <button className="tabs__buttons-item">
            <PlayArrowIcon className="tabs__buttons-icon-left" />
          </button>
          <button className="tabs__buttons-item">
            <PlayArrowIcon className="tabs__buttons-icon-right" />
          </button>
        </div>
        <div className="tabs__list">
          <div className="tabs__list-item">Свод данных по сотрудникам</div>
          <div className="tabs__list-item tabs__list-item--active">
            Сводный отчет внутри компании
          </div>
          <div className="tabs__list-item">Сводный отчет по сделкам</div>
        </div>
      </div>
      <div className="user">
        <img className="user__avatar" src={avatar} alt="User Avatar" />
        <div className="user__content">
          <p className="user__name">Kristina 🐰</p>
          <p className="user__role">менеджер продаж</p>
        </div>
        <DropdownIcon className="user__dropdown" />
      </div>
    </header>
  );
};

export default Header;
