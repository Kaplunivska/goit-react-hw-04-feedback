import Notification from 'components/Notification';
import Section from 'components/Section';
import { StatisticsPropTypes } from './Statistics.type';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
})  {
    return (
      <Section title="Statistics">
        {total ? (
            <ul>
                <li className={css.item}>
                    <p>Good: {good}</p>
                </li>
                <li className={css.item}>
                    <p>Neutral: {neutral}</p>
                </li>
                <li className={css.item}>
                    <p>Bad: {bad}</p>
                </li>
                <li className={css.item}>
                    <p>Total: {total}</p>
                </li>
                <li className={css.item}>
                    <p>Positive feedback: {positivePercentage}%</p>
                </li>
            </ul>
        ) : (
            <Notification message="There is no feedback" />
        )}
       </Section>
    );
}

Statistics.propTypes = StatisticsPropTypes;