import './Title.sass';

const Title = ({ value, mainTheme }) => (
  <div className={`title title--${mainTheme}`}>
    {value}
  </div>
);

export default Title;