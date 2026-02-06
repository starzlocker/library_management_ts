export const useLocalStorage = () => {
  const getData = <T>(key: string):T => {
    const data = localStorage.get(key);

    let result = null;
    try {
      result = JSON.parse(data)
      
    } catch(e) {
      if(e instanceof SyntaxError) {
        result = data;
      } else {
        throw e;
      }
    }

    return result;
  }

  const writeData = (key:string, payload:unknown) => {
    return typeof payload === 'string' ? 
      localStorage.setItem(key, payload) :
      localStorage.setItem(key, JSON.stringify(payload));
  }

  return {
    getData,
    writeData
  }
}