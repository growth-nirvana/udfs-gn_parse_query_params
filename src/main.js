const urlQueryStringToObject = (url) => {
  if (!url || url === '') return {};

  const queryString = url.split('?')[1]; 
  const queryStringObject = {};

  if (!queryString) {
    return queryStringObject;
  }

  const queryStringArray = queryString.split('&');

  if (!queryStringArray) {
    return queryStringObject;
  }

  if (queryStringArray.length === 0) {
    return queryStringObject;
  }

  queryStringArray.forEach((queryString) => {
    const queryStringArray = queryString.split('=');
    queryStringObject[queryStringArray[0]] = decodeURIComponent(queryStringArray[1]);
  });


  return queryStringObject;
}

export default urlQueryStringToObject;
