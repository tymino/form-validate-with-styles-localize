import './Input.sass';

const Input = ({
  name,
  placeholder,
  handleChange,
  value,
  error,
  mainTheme
}) => {
  const errClassName = error ? error : '';

  return (
    <div className='input-wrapper'>
      <input
        className={`input input--${mainTheme}${errClassName}`}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        autocomplete='off'
      />
    </div>
  )
};

export default Input;