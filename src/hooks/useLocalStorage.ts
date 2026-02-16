const MOCK = false;


export const useLocalStorage = () => {
  const getData = <T>(key: string):T|null => {
    if (MOCK) return null;

    const data = localStorage.getItem(key);

    if(!data) return null

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
    if (MOCK) return null;

    return typeof payload === 'string' ? 
      localStorage.setItem(key, payload) :
      localStorage.setItem(key, JSON.stringify(payload));
  }

  return {
    getData,
    writeData
  }
}