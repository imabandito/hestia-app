export const SearchIcon = ({ clickHandler, className, test }) => (
  <svg
    data-testid={test}
    className={className}
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={clickHandler}
  >
    <path
      d="M19 19L14.1691 14.1691M14.1691 14.1691C15.5651 12.7731 16.4286 10.8445 16.4286 8.71429C16.4286 4.4538 12.9748 1 8.71429 1C4.4538 1 1 4.4538 1 8.71429C1 12.9748 4.4538 16.4286 8.71429 16.4286C10.8445 16.4286 12.7731 15.5651 14.1691 14.1691Z"
      stroke="#030407"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);
