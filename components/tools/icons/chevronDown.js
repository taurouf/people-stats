const ChevronDown = ({ color, size, height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size ? size : height}
    width={size ? size : width}
    stroke={color ? color : "currentColor"}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default ChevronDown;
