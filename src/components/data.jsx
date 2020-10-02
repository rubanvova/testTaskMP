const url = "http://localhost:3003/get-data";

export const strings = [];

const get = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      strings.push(data);
    });
};

get();
