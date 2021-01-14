import { React } from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">変更</label>
      <input
        id="check"
        type="checkbox"
        checked={props.isPublished}
        onClick={() => props.toggle()}
      />
      <LikeButton
        count={props.count}
        increaseCount={() => props.increaseCount()}
      />
    </div>
  );
};

export default Article;
