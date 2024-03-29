import React from "react";
import notificationIcon from "./notification.png";

export default function NotificationIcon({ active }) {
  if (active) {
    return (
      <img src={notificationIcon} loading="lazy" style={{ width: "2.2rem" }} />
    );
  }
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5232 3.89502C10.6615 3.89502 7.52319 7.03335 7.52319 10.895V14.2667C7.52319 14.9784 7.21986 16.0634 6.85819 16.67L5.51653 18.8984C4.68819 20.275 5.25986 21.8034 6.77653 22.3167C11.8049 23.9967 17.2299 23.9967 22.2582 22.3167C23.6699 21.85 24.2882 20.1817 23.5182 18.8984L22.1765 16.67C21.8265 16.0634 21.5232 14.9784 21.5232 14.2667V10.895C21.5232 7.04502 18.3732 3.89502 14.5232 3.89502Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M16.6819 4.23331C16.3202 4.12831 15.9469 4.04664 15.5619 3.99997C14.4419 3.85997 13.3686 3.94164 12.3652 4.23331C12.7036 3.36997 13.5436 2.76331 14.5236 2.76331C15.5036 2.76331 16.3436 3.36997 16.6819 4.23331Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0234 22.7367C18.0234 24.6617 16.4484 26.2367 14.5234 26.2367C13.5668 26.2367 12.6801 25.84 12.0501 25.21C11.4201 24.58 11.0234 23.6934 11.0234 22.7367"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
