import './Button.sass';

const Button = ({ handleSubmit, buttonText, mainTheme }) => {
  return (
    <div className='button-wrapper'>
      <button
        onClick={handleSubmit}
        className={`button button--${mainTheme}`}
      >
        {buttonText}
      </button>
    </div>
  )
};

export default Button;