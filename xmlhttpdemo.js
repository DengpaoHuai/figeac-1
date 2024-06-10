const url = "https://swapi.dev/api/planets";

const getDataWithXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
};

getDataWithXML();
