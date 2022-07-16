import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="container my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://images.livemint.com/img/2022/06/12/600x338/razorpay-ke1F--621x414@LiveMint_1655035940292.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
