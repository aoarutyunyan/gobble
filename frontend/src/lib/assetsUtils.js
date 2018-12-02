export const getJpg = (name) => require(`../components/assets/${name}.jpg`);

export const postData = (url = '', data = {}) => {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};
