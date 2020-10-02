// const url = "http://localhost:3003/get-data";

export const strings = [];

const get = () => {
  fetch("https://cors-anywhere.herokuapp.com/https://mrsoft.by/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      strings.push(data);
    });
};

get();
