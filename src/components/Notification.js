import React, { useState, useEffect } from 'react';
import './Notification.css';

const NotificationPopup = ({ notificationNumber }) => {
  const [notification, setNotification] = useState({ heading: '', body: '' });
  const [show, setShow] = useState(false);

  const notifications = [
    {
      heading: 'Notification 1',
      body: 'This is the body of Notification 1.',
    },
    {
      heading: 'Notification 2',
      body: 'This is the body of Notification 2.',
    },
    {
      heading: 'Notification 3',
      body: 'This is the body of Notification 3.',
    },
  ];

  useEffect(() => {
    if (notificationNumber >= 1 && notificationNumber <= notifications.length) {
      setNotification(notifications[notificationNumber - 1]);
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notificationNumber]);

  return (
    show && (
      <div className="notification-popup" style={{ color: '#FF204E' }}>
        <h2>{notification.heading}</h2>
        <p>{notification.body}</p>
      </div>
    )
  );
};

export default NotificationPopup;
