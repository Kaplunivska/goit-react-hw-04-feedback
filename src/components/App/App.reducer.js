export const Actions = {
    GOOD: 'good',
    NEUTRAL: 'neutral',
    BAD: 'bad',
};

export function feedbackReducer(state, action) {
  switch (action.type) {
    case Actions.GOOD:
      return { ...state, good: state.good + 1 };
    case Actions.NEUTRAL:
      return { ...state, neutral: state.neutral + 1 };
    case Actions.BAD:
      return { ...state, bad: state.bad + 1 };
    default:
      return state;
   }
}