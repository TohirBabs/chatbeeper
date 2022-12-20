import React from "react";

export const NotificationIcon = ({ active }) => {
  console.log(active);
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <>
          <path
            d="M23.0636 17.4049L21.8969 15.4683C21.6519 15.0366 21.4303 14.2199 21.4303 13.7416V10.7899C21.4303 8.04825 19.8203 5.67992 17.4986 4.57159C16.8919 3.49825 15.7719 2.83325 14.4886 2.83325C13.2169 2.83325 12.0736 3.52159 11.4669 4.60659C9.19193 5.73825 7.61693 8.08325 7.61693 10.7899V13.7416C7.61693 14.2199 7.39526 15.0366 7.15026 15.4566L5.97193 17.4049C5.50526 18.1866 5.40026 19.0499 5.69193 19.8433C5.97193 20.6249 6.63693 21.2316 7.50026 21.5233C9.76359 22.2933 12.1436 22.6666 14.5236 22.6666C16.9036 22.6666 19.2836 22.2933 21.5469 21.5349C22.3636 21.2666 22.9936 20.6483 23.2969 19.8433C23.6003 19.0383 23.5186 18.1516 23.0636 17.4049Z"
            fill="#386FA4"
          />
          <path
            d="M17.8016 23.8449C17.3116 25.1983 16.0166 26.1666 14.5 26.1666C13.5783 26.1666 12.6683 25.7933 12.0266 25.1283C11.6533 24.7783 11.3733 24.3116 11.21 23.8333C11.3616 23.8566 11.5133 23.8683 11.6766 23.8916C11.945 23.9266 12.225 23.9616 12.505 23.9849C13.17 24.0433 13.8466 24.0783 14.5233 24.0783C15.1883 24.0783 15.8533 24.0433 16.5066 23.9849C16.7516 23.9616 16.9966 23.9499 17.23 23.9149C17.4166 23.8916 17.6033 23.8683 17.8016 23.8449Z"
            fill="#386FA4"
          />
        </>
      ) : (
        <>
          <path
            d="M14.5232 3.89502C10.6615 3.89502 7.52319 7.03335 7.52319 10.895V14.2667C7.52319 14.9784 7.21986 16.0634 6.85819 16.67L5.51653 18.8984C4.68819 20.275 5.25986 21.8034 6.77653 22.3167C11.8049 23.9967 17.2299 23.9967 22.2582 22.3167C23.6699 21.85 24.2882 20.1817 23.5182 18.8984L22.1765 16.67C21.8265 16.0634 21.5232 14.9784 21.5232 14.2667V10.895C21.5232 7.04502 18.3732 3.89502 14.5232 3.89502Z"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M16.6819 4.23331C16.3202 4.12831 15.9469 4.04664 15.5619 3.99997C14.4419 3.85997 13.3686 3.94164 12.3652 4.23331C12.7036 3.36997 13.5436 2.76331 14.5236 2.76331C15.5036 2.76331 16.3436 3.36997 16.6819 4.23331Z"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.0234 22.7367C18.0234 24.6617 16.4484 26.2367 14.5234 26.2367C13.5668 26.2367 12.6801 25.84 12.0501 25.21C11.4201 24.58 11.0234 23.6934 11.0234 22.7367"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </>
      )}
    </svg>
  );
};
