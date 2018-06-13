export const fetchGet = (req, postData) => {
  const entries = Object.entries(postData).map(
    ([key, value]) => `${key}=${encodeURIComponent(value)}`
  );
  const queryString = entries.join('&');
  console.log(postData, entries);
  return fetch(`${req}?${queryString}`);
};

export const fetchPost = (req, postData) => {
  return fetch(req, {
    method: 'post',
    body: JSON.stringify(postData)
  })
};

export const fetchGetAsJson = (req, postData) =>
  fetchGet(req, postData).then(
    (res) => {
      return res.json().then(
        (data) => {
          return data;
        }
      );
    }
  );

export const fetchPostAsJson = (req, postData) =>
fetchPost(req, postData).then(
  (res) => {
    console.log(res);
    return res.json().then(
      (data) => {
        return data;
      }
    );
  }
);
