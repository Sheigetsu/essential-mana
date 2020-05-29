import React from "react";
import { Link } from "gatsby";

const PostCard = ({ title, tags }) => (
  <div>
    {title}
    {tags.map(tag => {
      return (
        <Link to="#" activeStyle={{ paddingLeft: "10px" }}>
          #{tag}
        </Link>
      );
    })}
  </div>
);

export default PostCard;
