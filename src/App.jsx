import { multiLang } from './utils/localization';

import './App.sass';

import Form from './components/Form/Form';


const App = () => {
  const setLocalLang = () => {
    const localLang = 'en';

    return multiLang[localLang];
  };
  
  const setMainTheme = () => {
    const mainTheme = 'default';

    return mainTheme;
  };

  return (
    <main className='form-container'>
      <Form
        localLang={setLocalLang()}
        mainThemeClass={setMainTheme()}
      />
    </main>
  );
};

export default App;