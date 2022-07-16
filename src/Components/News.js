import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    console.log("Hello I am constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cb0cb501b1344cca2746cf20ae4f5b8&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles,totalResults:parseData.totalResults });
  }


  handlePrevClick = async () => {
    // console.log("Previous clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cb0cb501b1344cca2746cf20ae4f5b8&page=${
      this.state.page-1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cb0cb501b1344cca2746cf20ae4f5b8&page=${
        this.state.page+1
      }&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className = "text-center">Top headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-sm btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
              className="btn btn-sm btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
