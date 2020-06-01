import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "gatsby";

const PostCard = (data) => {
    return (
        <div className={"postCard"}>
            <div className={"header"}>
                <img
                    src={data.thumbnail}
                    alt={data.title}/>
                <h5><Link to={data.slug}>{data.title}</Link></h5>
                <sub>by {data.author} {data.date ? "- " + data.date : null}</sub>
            </div>
            <div className={"content"}>
                <span>{data.description}</span>
            </div>
        </div>
    );
};

export default PostCard;
