const Button = ({ btnName, clickHandler, btnClass }) => {
  return (
    <>
      <button onClick={clickHandler} className={btnClass}>
        {btnName}
      </button>
    </>
  );
};
export default Button;
