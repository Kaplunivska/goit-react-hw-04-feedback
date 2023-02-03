import Section from 'components/Section';
import { FeedbackOptionsPropTypes } from './FeedbackOptions.type';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Section title="Please leave feedback">
      <ul className={css.list}>
        {Object.keys(options).map(key => (
          <li key={key}>
            <button
              type="button"
              className={css.button}
              onClick={() => {
                onLeaveFeedback({ type: key });
              }}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

FeedbackOptions.propTypes = FeedbackOptionsPropTypes;