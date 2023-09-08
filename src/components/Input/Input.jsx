const Input = ({ placeholder, value, changeHandler, ipClass }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        className={ipClass}
      />
    </>
  );
};
export default Input;
