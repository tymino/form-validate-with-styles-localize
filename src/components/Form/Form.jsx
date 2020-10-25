import './Form.sass';

import { useState, useEffect } from 'react';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({ localLang, mainThemeClass }) => {
  const [form, setForm] = useState({
    firstName: '',
    secondName: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        // send data
      }
      else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if(errs.firstName || errs.secondName) {
      console.log('input Error!');
    } else {
      setIsSubmitting(true);
    }
  }

  const validate = () => {
    let err = {};
    const errClassName = 'error-input';
    const acceptedClassName = 'accepted-input';

    if(!form.firstName) { err.firstName = errClassName; }
    else { err.firstName = acceptedClassName; }

    if(!form.secondName) { err.secondName = errClassName; }
    else { err.secondName = acceptedClassName; }

    return err;
  }

  return (
    <div className={`form form--${mainThemeClass}`}>
      {isSubmitting
        ? <div>Отправка</div>
        : <div></div>
      }
      <Title
        value={localLang.titleName}
        mainTheme={mainThemeClass}
      />
      <Input
        name='firstName'
        placeholder={localLang.placeholderInput.firstName}
        handleChange={handleChange}
        value={form.firstName}
        error={errors.firstName ? errors.firstName : null}
        mainTheme={mainThemeClass}
      />
      <Input
        name='secondName'
        placeholder={localLang.placeholderInput.secondName}
        handleChange={handleChange}
        value={form.secondName}
        error={errors.secondName ? errors.secondName : null}
        mainTheme={mainThemeClass}
      />
      <Button
        handleSubmit={handleSubmit}
        buttonText={localLang.buttonText.primary}
        mainTheme={mainThemeClass}
      />
    </div>
  );
};

export default Form;