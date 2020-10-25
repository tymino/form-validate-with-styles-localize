import './Input.sass';

const Input = ({
  name,
  placeholder,
  handleChange,
  value,
  error,
  mainTheme
}) => {
  return (
    <div className={`input input--${mainTheme}`}>
      <input
        className={error ? error : null}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
};

export default Input;