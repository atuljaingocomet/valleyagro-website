type AppProps = {
    fill: string;
  };
  
  const BurgerMenuOpen = (props: AppProps) => {
    const { fill } = props;
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 41 40"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="3.53553"
          y1="4.46447"
          x2="35.5355"
          y2="36.4645"
          stroke={fill}
          stroke-width="5"
        />
        <line
          x1="5.46447"
          y1="36.4645"
          x2="37.4645"
          y2="4.46447"
          stroke={fill}
          stroke-width="5"
        />
      </svg>
    );
  };
  
  export default BurgerMenuOpen;