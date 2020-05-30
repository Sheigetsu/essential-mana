import React from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PostCard = ({ title, tags }) => (
  // <div className={"post-card"}>
  //   <div className={"post-card-header"}>
  //     <img src={"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}  alt={"baby-yoda"}/>
  //     <div className={"title"}>{title}</div>
  //   </div>
  //   {tags.map(tag => {
  //     return (
  //       <Link key={tag} to="/" activeStyle={{ paddingLeft: "10px" }}>
  //         #{tag}
  //       </Link>
  //     );
  //   })}
  // </div>
    <Card>
        <Card.Img variant="top" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
);

export default PostCard;
