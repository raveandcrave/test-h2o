import "./styles.scss";
import cn from "classnames";

import randomNumber from "@/helpers/randomNumber";
import numberWithSpaces from "@/helpers/numberWithSpaces";

const randomZones = [
  { name: "Линейный персонал", amount: randomNumber(10000, 120000) },
  {
    name: "Подразделение разовых работ ФОТ",
    amount: randomNumber(10000, 120000),
  },
  { name: "Бензин (наличные)", amount: randomNumber(10000, 120000) },
  { name: "Закупка инвентаря", amount: randomNumber(10000, 120000) },
  { name: "Закупка спецодежды/СИЗ", amount: randomNumber(10000, 120000) },
  { name: "Ремонт оборудования", amount: randomNumber(10000, 120000) },
  { name: "Обслуживание автомобиля", amount: randomNumber(10000, 120000) },
  { name: "Форс-мажоры", amount: randomNumber(10000, 120000) },
  { name: "Рекламные бюджеты (Блогеры)", amount: randomNumber(10000, 120000) },
  { name: "Рекламные бюджеты (Контекст)", amount: randomNumber(10000, 120000) },
];

const ProblemZones = () => {
  return (
    <div className="problem-zones">
      <h2 className="problem-zones__title">Проблемные зоны</h2>
      <ul className="problem-zones__list">
        {randomZones.map((zone) => (
          <li className="problem-zones__item" key={zone.name}>
            <div
              className={cn("problem-zones__icon", {
                "problem-zones__icon--orange":
                  zone.amount >= 10000 && zone.amount <= 50000,
                "problem-zones__icon--red": zone.amount > 50000,
              })}
            >
              !
            </div>
            <div className="problem-zones__content">
              <p className="problem-zones__label">{zone.name}</p>
              <p className="problem-zones__amount">
                ₽ {numberWithSpaces(zone.amount)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemZones;
