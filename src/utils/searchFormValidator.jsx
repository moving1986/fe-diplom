export const validateSearchForm = (formData) => {
  const errors = {
    from_city: '',
    to_city: '',
    date_start: '',
    date_end: ''
  };

  let isValid = true;


  if (!formData.from_city?.trim()) {
    errors.from_city = 'Укажите город отправления';
    isValid = false;
  } else if (formData.from_city.trim().length < 2) {
    errors.from_city = 'Название города должно содержать минимум 2 символа';
    isValid = false;
  }

  
  if (!formData.to_city?.trim()) {
    errors.to_city = 'Укажите город назначения';
    isValid = false;
  } else if (formData.to_city.trim().length < 2) {
    errors.to_city = 'Название города должно содержать минимум 2 символа';
    isValid = false;
  }


  if (formData.from_city?.trim() && formData.to_city?.trim() && 
      formData.from_city.trim().toLowerCase() === formData.to_city.trim().toLowerCase()) {
    errors.from_city = 'Города отправления и назначения не могут совпадать';
    errors.to_city = 'Города отправления и назначения не могут совпадать';
    isValid = false;
  }


  if (!formData.date_start) {
    errors.date_start = 'Укажите дату отправления';
    isValid = false;
  } else {
    const startDate = new Date(formData.date_start);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (startDate < today) {
      errors.date_start = 'Дата отправления не может быть в прошлом';
      isValid = false;
    }
  }

  if (formData.date_end) {
    const startDate = new Date(formData.date_start);
    const endDate = new Date(formData.date_end);
    
    if (endDate < startDate) {
      errors.date_end = 'Дата возвращения не может быть раньше даты отправления';
      isValid = false;
    }
  }

  return { isValid, errors };
};

export const validateCityName = (cityName) => {
  if (!cityName || cityName.trim().length < 2) {
    return 'Название города должно содержать минимум 2 символа';
  }
  return '';
};