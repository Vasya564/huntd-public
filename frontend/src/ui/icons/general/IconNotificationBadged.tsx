import cn from 'classnames';
import React from 'react';
import icons from '@/ui/icons/icons.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';

export const IconNotificationBadged: FCIcon = () => (
  // classname "icon" for overrides
  <svg
    className={cn(icons.icon, 'icon-notification-badged')}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 23.02C12.42 23.0103 12.823 22.8524 13.1378 22.5743C13.4525 22.2961 13.6588 21.9156 13.72 21.5H10.2134C10.2764 21.9269 10.4923 22.3163 10.8209 22.5959C11.1496 22.8755 11.5686 23.0262 12 23.02Z"
      fill="currentColor"
    />
    <path
      d="M21.4351 19.237L21.4378 19.2394C21.4565 19.2561 21.4721 19.2774 21.4831 19.3021L21.9401 19.0994L21.4831 19.3021C21.4941 19.3269 21.5 19.3543 21.5 19.3822V19.8371L20.9351 19.2795C20.3435 18.6955 19.8218 18.0413 19.3812 17.3307C18.774 16.162 18.4184 14.8734 18.3389 13.5516L18.3389 10.179C18.3389 10.1789 18.3389 10.1789 18.3389 10.1788C18.339 9.86478 18.3172 9.55158 18.2736 9.24155C18.3905 9.28234 18.5087 9.31912 18.6281 9.35182C18.6616 9.62433 18.6793 9.89872 18.6812 10.1736V13.5596V13.5778L18.6825 13.596C18.7713 14.8111 19.0968 15.9962 19.6401 17.0818L19.6513 17.1042L19.6647 17.1254C20.1593 17.9069 20.7547 18.6172 21.4351 19.237ZM20.5839 20.1354H21.5V20.3142C21.5 20.3669 21.4794 20.4154 21.4461 20.4494C21.4131 20.4831 21.3707 20.5 21.3289 20.5H2.67114C2.62927 20.5 2.58688 20.4831 2.55391 20.4494L2.19698 20.7987L2.55391 20.4494C2.52059 20.4154 2.5 20.3669 2.5 20.3142V20.1354H3.39597H20.5839ZM3.04473 19.2795L2.5 19.8172V19.382C2.50006 19.3541 2.50595 19.3268 2.51691 19.3021L2.05988 19.0994L2.51691 19.3021C2.5279 19.2774 2.54355 19.2561 2.56218 19.2394L2.56222 19.2394L2.56815 19.234C3.23859 18.6123 3.82443 17.9022 4.31026 17.1225L4.3226 17.1027L4.33303 17.0818C4.87637 15.9962 5.20181 14.8111 5.29062 13.596L5.29195 13.5778V13.5596L5.29195 10.172L5.29194 10.1708C5.28801 8.49873 5.87633 6.88325 6.94587 5.62238C8.0152 4.36177 9.49285 3.54106 11.1049 3.3087L11.5336 3.24692V2.81382V1.91548C11.5336 1.80185 11.5778 1.69499 11.6533 1.61786C11.7285 1.5411 11.828 1.5 11.9295 1.5C12.031 1.5 12.1306 1.5411 12.2057 1.61786C12.2812 1.695 12.3255 1.80186 12.3255 1.91548V2.77953V3.2181L12.7603 3.27526C13.3788 3.35657 13.9826 3.52711 14.5537 3.78153V3.89731V3.90443L14.5539 3.91155C14.5562 3.99318 14.5603 4.0747 14.5661 4.15606C13.7723 3.79836 12.9103 3.61061 12.034 3.60989L12.0324 3.60989C11.1884 3.61184 10.3533 3.7839 9.57512 4.11591C8.79692 4.44791 8.09117 4.93319 7.49799 5.54343C6.90483 6.15364 6.43586 6.87683 6.1174 7.67131C5.79909 8.46543 5.63727 9.31551 5.64094 10.173V13.5516C5.56142 14.8734 5.20587 16.162 4.59864 17.3307C4.1581 18.0413 3.63642 18.6955 3.04473 19.2795Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M19 7.5C20.6569 7.5 22 6.15685 22 4.5C22 2.84315 20.6569 1.5 19 1.5C17.3431 1.5 16 2.84315 16 4.5C16 6.15685 17.3431 7.5 19 7.5Z"
      fill="#f35a35"
    />
  </svg>
);