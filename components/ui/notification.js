import { useContext } from "react";
import classes from "./notification.module.css";
import NotificationContext from "../../store/notification-context";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  } else if (status === "error") {
    statusClasses = classes.error;
  } else if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.message}>{message}</p>
      </div>
    </div>
  );
}

export default Notification;
