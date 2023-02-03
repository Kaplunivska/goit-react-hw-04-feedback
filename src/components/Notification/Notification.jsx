import { NotificationPropTypes } from './Notification.type';

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = NotificationPropTypes;