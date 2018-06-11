export const fetchPost = (req, postData) => {
  return fetch(req, {
    method: 'post',
    body: JSON.stringify(postData)
  })
};

export const fetchPostAsJson = (req, postData) =>
  fetchPost(req, postData).then(
    (res) => {
      return res.json().then(
        (data) => {
          return data;
        }
      );
    }
  );