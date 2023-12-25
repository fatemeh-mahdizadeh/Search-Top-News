class News {
  constructor() {
    this.APIkey = "c402a1c5ea5944ddb0d8eba80e821c5e";
  }

  async queryAPI(newsName, country, category) {
    let url = "https://newsapi.org/v2/";
    if (country === "" && category === "") {
      url += "everything?";
    } else {
      url += "top-headlines?";
    }
    if (newsName !== "") {
      url += `q=${newsName}&`;
    }
    if (country !== "") {
      url += `country=${country}&`;
    }
    if (category !== "") {
      url += `category=${category}&`;
    }

    url += `apiKey=${this.APIkey}`;

    const newsResponse = await fetch(url);
    const news = await newsResponse.json();

    return {
      news,
    };
  }
}
