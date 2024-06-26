type IconProps = {
  isActivated?: boolean;
  width?: any;
  height?: number;
  fill?: string;
  strokeFill?: string;
  strokeWidth?: number;
  isActive?: boolean;
};

export function IconLogo(props: IconProps) {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 97 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.3598 14.85H68.6098V38.75C68.6098 41.2 69.0098 41.55 71.3598 41.55C72.4098 41.55 76.9098 41.55 78.2098 41.55C80.6598 41.55 81.0598 39.9 81.4598 32.05C82.8098 33.15 85.3598 34.25 87.0598 34.65C86.3598 44.05 84.7098 47 78.7098 47C77.3598 47 71.8598 47 70.5598 47C64.1598 47 62.3598 45.05 62.3598 38.75V14.85ZM62.5598 5.35L66.4598 0.700001C72.3598 2.8 79.2598 6.55 83.2598 9.45L79.2598 14.75C75.4598 11.55 68.4598 7.65 62.5598 5.35ZM53.3598 18.4L59.2598 19.6C58.5098 26.55 57.2098 34.25 53.9098 39.15L48.3098 35.95C51.2598 31.65 52.7098 25.1 53.3598 18.4ZM82.1598 19.2L87.6598 16.45C91.9598 21.95 95.5598 29.3 96.7598 34.55L90.6598 37.55C89.6598 32.4 86.1598 24.7 82.1598 19.2Z"
          fill={props.fill}
        />
        <path
          d="M31.0547 20.0996C31.543 18.0814 31.9499 15.9818 32.2754 13.8008C32.6335 11.5872 32.8451 9.55273 32.9102 7.69727C31.7383 7.69727 30.5176 7.69727 29.248 7.69727C27.9785 7.69727 26.709 7.69727 25.4395 7.69727C24.2025 7.69727 22.998 7.72982 21.8262 7.79492C20.6543 7.82747 19.5638 7.89258 18.5547 7.99023C18.099 8.05534 17.513 8.12044 16.7969 8.18555C16.0807 8.2181 15.3158 8.2832 14.502 8.38086C13.7207 8.47852 12.9232 8.59245 12.1094 8.72266C11.2956 8.85286 10.5469 9.01562 9.86328 9.21094L7.42188 4.57227C8.04036 4.63737 8.74023 4.71875 9.52148 4.81641C10.3353 4.88151 11.1491 4.94661 11.9629 5.01172C12.7767 5.07682 13.5579 5.12565 14.3066 5.1582C15.0553 5.19076 15.6901 5.20703 16.2109 5.20703C17.9036 5.20703 19.7266 5.19076 21.6797 5.1582C23.6328 5.0931 25.5859 4.99544 27.5391 4.86523C29.4922 4.73503 31.3639 4.58854 33.1543 4.42578C34.9772 4.26302 36.6048 4.05143 38.0371 3.79102L39.6484 5.35352C39.4206 6.42773 39.1927 7.56706 38.9648 8.77148C38.737 9.94336 38.4766 11.1641 38.1836 12.4336C37.8906 13.6706 37.5651 14.9238 37.207 16.1934C36.849 17.4629 36.4258 18.6999 35.9375 19.9043C37.8906 19.7415 39.8926 19.5625 41.9434 19.3672C43.9941 19.1719 45.8171 18.944 47.4121 18.6836L46.6309 23.2734C45.9798 23.2409 45.1986 23.2083 44.2871 23.1758C43.4082 23.1432 42.4479 23.127 41.4062 23.127C40.3646 23.0944 39.2904 23.0618 38.1836 23.0293C37.0768 22.9967 35.9863 22.9805 34.9121 22.9805C34.0658 22.9805 33.0078 22.9967 31.7383 23.0293C30.4688 23.0293 29.0365 23.0618 27.4414 23.127V26.1055C27.4414 26.8542 27.4089 27.7005 27.3438 28.6445C27.2786 29.556 27.2135 30.3861 27.1484 31.1348C29.3294 30.972 31.3965 30.8418 33.3496 30.7441C35.3353 30.6465 36.9466 30.5163 38.1836 30.3535C38.0859 31.1999 38.0046 31.8997 37.9395 32.4531C37.9069 33.0065 37.8906 33.5599 37.8906 34.1133V41.0957C37.8906 42.0397 37.8418 43.0814 37.7441 44.2207C37.679 45.3926 37.4674 46.6784 37.1094 48.0781L32.8125 48.8594C32.7474 48.4688 32.6823 47.9805 32.6172 47.3945C32.5846 46.8086 32.5358 46.1901 32.4707 45.5391C32.4382 44.9206 32.4056 44.3021 32.373 43.6836C32.3405 43.0977 32.3242 42.6094 32.3242 42.2188V33.8691C31.0872 33.804 29.7689 33.7878 28.3691 33.8203C26.9694 33.8529 25.5534 33.918 24.1211 34.0156C22.7214 34.0807 21.3216 34.1621 19.9219 34.2598C18.5547 34.3574 17.2526 34.4551 16.0156 34.5527C14.974 34.6178 13.8997 34.7318 12.793 34.8945C11.7188 35.0573 10.6445 35.2201 9.57031 35.3828L7.4707 30.9395C7.92643 31.0046 8.46354 31.0697 9.08203 31.1348C9.73307 31.1999 10.4004 31.265 11.084 31.3301C11.7676 31.3952 12.4186 31.444 13.0371 31.4766C13.6882 31.5091 14.2578 31.5254 14.7461 31.5254C16.7969 31.5254 19.1895 31.4766 21.9238 31.3789C21.9238 30.5651 21.9076 29.735 21.875 28.8887C21.8424 28.0423 21.8262 27.3424 21.8262 26.7891V23.2246C20.5892 23.2572 19.3685 23.306 18.1641 23.3711C16.9922 23.4036 15.9017 23.4362 14.8926 23.4688C13.8835 23.5013 12.9883 23.5501 12.207 23.6152C11.4258 23.6478 10.791 23.6803 10.3027 23.7129C9.7168 23.7454 9.06576 23.7943 8.34961 23.8594C7.66602 23.9245 6.96615 23.9896 6.25 24.0547C5.53385 24.1198 4.81771 24.2012 4.10156 24.2988C3.41797 24.3639 2.79948 24.429 2.24609 24.4941L0.292969 19.6602C1.75781 19.8229 3.41797 19.9857 5.27344 20.1484C7.12891 20.2786 8.78906 20.3763 10.2539 20.4414C11.2305 20.474 12.5814 20.4902 14.3066 20.4902C16.0319 20.4577 17.8874 20.4251 19.873 20.3926C21.8587 20.36 23.8444 20.3275 25.8301 20.2949C27.8158 20.2298 29.5573 20.1647 31.0547 20.0996Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}

export const IconSearch = (props: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={props.height}
    width={props.width}
    role="presentation"
    viewBox="0 0 24 24"
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
  </svg>
);

export const IconBack = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      )}
    </>
  );
};

export const IconLinkedIn = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      ) : (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      )}
    </>
  );
};

export const IconGithub = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export const IconVoice = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#080341"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconPrev = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconNext = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
export const IconHome = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconPhone = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconPerson = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      )}
    </>
  );
};

export const IconChat = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconVoiceChat = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconCamera = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </g>
        </svg>
      )}
    </>
  );
};
export const IconBook = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      )}
    </>
  );
};
export const IconProfile = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconChart = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="-0.5 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path d="M30.000,32.000 L23.000,32.000 C22.447,32.000 22.000,31.552 22.000,31.000 L22.000,1.000 C22.000,0.448 22.447,-0.000 23.000,-0.000 L30.000,-0.000 C30.553,-0.000 31.000,0.448 31.000,1.000 L31.000,31.000 C31.000,31.552 30.553,32.000 30.000,32.000 ZM29.000,2.000 L24.000,2.000 L24.000,30.000 L29.000,30.000 L29.000,2.000 ZM19.000,32.000 L12.000,32.000 C11.448,32.000 11.000,31.552 11.000,31.000 L11.000,17.000 C11.000,16.448 11.448,16.000 12.000,16.000 L19.000,16.000 C19.553,16.000 20.000,16.448 20.000,17.000 L20.000,31.000 C20.000,31.552 19.553,32.000 19.000,32.000 ZM18.000,18.000 L13.000,18.000 L13.000,30.000 L18.000,30.000 L18.000,18.000 ZM8.000,32.000 L1.000,32.000 C0.448,32.000 0.000,31.552 0.000,31.000 L0.000,11.000 C0.000,10.448 0.448,10.000 1.000,10.000 L8.000,10.000 C8.552,10.000 9.000,10.448 9.000,11.000 L9.000,31.000 C9.000,31.552 8.552,32.000 8.000,32.000 ZM7.000,12.000 L2.000,12.000 L2.000,30.000 L7.000,30.000 L7.000,12.000 Z" />
      </svg>
    </>
  );
};
export const IconLock = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"></path>
      </svg>
    </>
  );
};
export const IconLike = (props: IconProps) => {
  return (
    <>
      <svg
        fill={props.fill}
        height={props.height}
        width={props.width}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.017 31.992c-9.088 0-9.158-0.377-10.284-1.224-0.597-0.449-1.723-0.76-5.838-1.028-0.298-0.020-0.583-0.134-0.773-0.365-0.087-0.107-2.143-3.105-2.143-7.907 0-4.732 1.472-6.89 1.534-6.99 0.182-0.293 0.503-0.47 0.847-0.47 3.378 0 8.062-4.313 11.21-11.841 0.544-1.302 0.657-2.159 2.657-2.159 1.137 0 2.413 0.815 3.042 1.86 1.291 2.135 0.636 6.721 0.029 9.171 2.063-0.017 5.796-0.045 7.572-0.045 2.471 0 4.107 1.473 4.156 3.627 0.017 0.711-0.077 1.619-0.282 2.089 0.544 0.543 1.245 1.36 1.276 2.414 0.038 1.36-0.852 2.395-1.421 2.989 0.131 0.395 0.391 0.92 0.366 1.547-0.063 1.542-1.253 2.535-1.994 3.054 0.061 0.422 0.11 1.218-0.026 1.834-0.535 2.457-4.137 3.443-9.928 3.443zM3.426 27.712c3.584 0.297 5.5 0.698 6.51 1.459 0.782 0.589 0.662 0.822 9.081 0.822 2.568 0 7.59-0.107 7.976-1.87 0.153-0.705-0.59-1.398-0.593-1.403-0.203-0.501 0.023-1.089 0.518-1.305 0.008-0.004 2.005-0.719 2.050-1.835 0.030-0.713-0.46-1.142-0.471-1.16-0.291-0.452-0.185-1.072 0.257-1.38 0.005-0.004 1.299-0.788 1.267-1.857-0.024-0.849-1.143-1.447-1.177-1.466-0.25-0.143-0.432-0.39-0.489-0.674-0.056-0.282 0.007-0.579 0.183-0.808 0 0 0.509-0.808 0.49-1.566-0.037-1.623-1.782-1.674-2.156-1.674-2.523 0-9.001 0.025-9.001 0.025-0.349 0.002-0.652-0.164-0.84-0.443s-0.201-0.627-0.092-0.944c0.977-2.813 1.523-7.228 0.616-8.736-0.267-0.445-0.328-0.889-1.328-0.889-0.139 0-0.468 0.11-0.812 0.929-3.341 7.995-8.332 12.62-12.421 13.037-0.353 0.804-1.016 2.47-1.016 5.493 0 3.085 0.977 5.473 1.447 6.245z"></path>
      </svg>
    </>
  );
};
