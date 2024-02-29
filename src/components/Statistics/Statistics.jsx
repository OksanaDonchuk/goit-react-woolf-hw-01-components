import css from './Statistics.module.css';
import { getRandomColor } from 'random_color.js';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.stat_item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
