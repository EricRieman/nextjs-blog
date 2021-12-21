import ReactDOM from 'react-dom'
import style from './notification.module.css';

function Notification({ title, message, status }) {
  let statusStyle = '';

  if (status === 'success') {
    statusStyle = style.success;
  }

  if (status === 'error') {
    statusStyle = style.error;
  }

  const cssClasses = `${style.notification} ${statusStyle}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notification')
  );
}

export default Notification;
