import './Button.sass';

const Button = ({ handleSubmit, buttonText, mainTheme }) => {
  return (
    <div className={`button button--${mainTheme}`}>
      <button
        onClick={handleSubmit}
      >
        {buttonText}
      </button>
    </div>
  )
};

export default Button;