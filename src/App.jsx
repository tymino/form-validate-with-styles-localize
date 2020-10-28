import { multiLang } from './utils/localization';

import './App.sass';
import { useState } from 'react';

import Select from './components/Select/Select';
import Form from './components/Form/Form';


const App = () => {
  const initLangs = () => {
    let langArr = [];

    for(let key in multiLang) {
      langArr.push(key);
    }
    return langArr;
  };

  const [localLang, setLocalLang] = useState({
    active: 'ru',
    arrayData: initLangs()
  });
  const [activeStyle, setActiveStyle] = useState({
    active: 'default',
    arrayData: ['default', 'dark', 'orange']
  });

  const handleChangeLang = e => {
    setLocalLang({
      ...localLang,
      active: e.target.value
    });
  };

  const handleChangeStyle = e => {
    setActiveStyle({
      ...activeStyle,
      active: e.target.value
    });
  };

  return (
    <main
      className={`main main--${activeStyle.active}`
    }>
      <div className='main__select'>
        <Select
          data={localLang}
          handleChange={handleChangeLang}
          mainTheme={activeStyle.active}
          />
        <Select
          data={activeStyle}
          handleChange={handleChangeStyle}
          mainTheme={activeStyle.active}
        />
      </div>
      <Form
        localLang={multiLang[localLang.active]}
        mainThemeClass={activeStyle.active}
      />
    </main>
  );
};

export default App;