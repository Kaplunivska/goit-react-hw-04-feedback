import PropTypes from 'prop-types';

export const FeedbackOptionsPropTypes = {
    options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      }).isRequired,
      onLeaveFeedback: PropTypes.func.isRequired,
};