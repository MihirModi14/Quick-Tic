const CustomSquare = ({ value, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {value || ""}
    </button>
  );
};

export default CustomSquare;
