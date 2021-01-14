import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    document
      .getElementById("countUp")
      .addEventListener("click", this.increaseCount);
  }

  componentDidUpdate() {
    if (this.state.count > 10) {
      this.setState({
        count: 0,
      });
    }
  }

  componentWillUnmount() {
    document
      .getElementById("countUp")
      .removeEventListener("click", this.increaseCount);
  }

  render() {
    return (
      <>
        <Article
          title={"React"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
          increaseCount={() => this.increaseCount()}
        />
      </>
    );
  }
}

export default Blog;
