import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    title,
    stats,
}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                return (
                    <li
                        className={css.item}
                        key={id}
                        style={{ backgroundColor: randomHexColor() }}
                    >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                );
            })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
      statList: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Statistics;