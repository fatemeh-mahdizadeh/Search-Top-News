class UI {
  constructor() {
    this.result = document.querySelector("#result");
  }
  printMesege(mesege, className) {
    let div = document.createElement("div");
    div.innerHTML = mesege;
    div.classList = className;
    document.querySelector(".massage").appendChild(div);
    console.log(div);
    setTimeout(() => {
      this.removeMesege();
    }, 3000);
  }
  removeMesege() {
    const red = document.querySelector(".bg-red-600").remove();
  }

  //show news
  showNews(news) {
    news.forEach((newsInfo) => {
      this.result.innerHTML += `
            <div class="flex items-center justify-between flex-col border-2 rounded-xl h-12/12 border-pink-700 border-white bg-pink-900 py-2 px-4 mx-4 my-2">
                <div class="">
                    <h2 class="my-1 text-pink-300" >${newsInfo.title}</h2>
                    <p class="my-1">news information:</p>
                    <p>source: ${newsInfo.source.name}</p>
              
                    <p class="my-1 text-pink-200">Data & time: ${newsInfo.publishedAt}</p>
                </div>

                <div class="w-11/12 h-3/12 flex border border-pink-800 rounded-xl mt-6 mb-4 items-end text-center bg-pink-800 py-2">
                    <a href="${newsInfo.url}" class="w-11/12 text-blue-600 ">Complete News</a>
                </div>
            </div>
            `;
    });
  }
}
