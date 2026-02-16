import { useState } from 'react';

type fields = {
  [key: string]: unknown;
};

export const useForm = () => {
  const [errorMap, setErrorMap] = useState({} as Record<string, Array<string>>);

  const validate = (fields: fields) => {
    for(const [k, v] of Object.entries(fields)) {
      console.log(k, v)
    }
  }

  const isValid = () => {
    if(Object.keys(errorMap)) return false;

    return true;
  };

  const addErrorToField = (field:string, error: string) => {
    let newValue = null;
    if (field in errorMap) {
      newValue = [...errorMap[field], error];
    } else {
      newValue = [error];
    }
    setErrorMap(prev => ({
      ...prev,
      [field]: newValue
    }))
  }

  return {
    errorMap,
    addErrorToField,
    isValid, 
    validate
  }
};
