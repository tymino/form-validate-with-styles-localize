import './Select.sass';

const Select = ({ data, handleChange, mainTheme }) => {
  return (
    <div className='select-wrapper'>
      <select
        value={data.active}
        onChange={handleChange}
        className={`select select--${mainTheme}`}
      >
        {data.arrayData.map((elem, index) => (
            <option
              value={elem}
              key={elem + index}
              // className={`option option--${mainTheme}`}
            >
              {elem}
            </option>
          )
        )}
      </select>
    </div>
  )
};

export default Select;