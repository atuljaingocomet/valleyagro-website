type AppProps = {
  fill: string;
};

const BurgerMenu = (props: AppProps) => {
  const { fill } = props;
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 16L21 18L3 18L3 16L21 16ZM21 11L3 11L3 13L21 13L21 11ZM21 6L3 6L3 8L21 8L21 6Z"
        fill={fill}
      />
    </svg>
  );
};

export default BurgerMenu;
