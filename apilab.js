(function () {
  const textInput = document.querySelector("#textInput");
  const pushButton = document.querySelector("#pushButton");
  const ul = document.querySelector("#redditList");
  let test = "aww";

  function pageLoad() {
    fetch(`https://www.reddit.com/r/${test}/.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const list = document.querySelector("#redditList");
        for (let i = 0; i < data.data.children.length; i++) {
          let redditInfo = document.createElement("li");
          redditInfo.innerHTML = `<img src=${data.data.children[i].data.thumbnail}>${data.data.children[i].data.title}: <a href=${data.data.children[i].data.url}>  ${data.data.children[i].data.url}</a>`;

          list.append(redditInfo);
          console.log(data.data.children[i].data);
        }
      });
  }

  pageLoad();

  pushButton.addEventListener("click", (event) => {
    event.preventDefault();

    test = textInput.value;
    ul.replaceChildren();

    pageLoad();
  });
})();
