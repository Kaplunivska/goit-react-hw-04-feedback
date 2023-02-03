import { useReducer } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import { feedbackReducer } from './App.reducer';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
 const [feedback, dispatch] = useReducer(feedbackReducer, initialState);
 const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, cur) => acc + cur, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total ? Math.round((100 * good) / total) : 0;
  }

    return (
      <>
        <FeedbackOptions options={feedback} onLeaveFeedback={dispatch}/>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </>
    );
  }

