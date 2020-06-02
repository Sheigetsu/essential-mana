// @ts-ignore
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";

import DefaultLayout from "../components/layouts/defaultLayout";
import PostCard from "../components/postCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allMdx {
            edges {
              node {
                frontmatter {
                  tags
                  title
                  author
                  slug
                  date(formatString: "dddd MMMM Do, YYYY")
                  description
                  thumbnail
                }
                id
              }
            }
          }
        }
    `);
    const postCardInfo = data.allMdx.edges.map(edge => edge.node);
    const chunkedPostCards = _.chunk(postCardInfo, 2);

    return (
        <DefaultLayout>
            <div className={"main-page"}>
                {chunkedPostCards.map((card, index) => {
                    return (
                        // using index as key isn't really recommended but might be fine
                        <Row key={index}>
                            {card.map(postCard => {
                                return (
                                    <Col key={postCard.id}>
                                        <PostCard key={postCard.id}
                                                  title={postCard.frontmatter.title}
                                                  tags={postCard.frontmatter.tags}
                                                  author={postCard.frontmatter.author}
                                                  slug={postCard.frontmatter.slug}
                                                  description={postCard.frontmatter.description}
                                                  date={postCard.frontmatter.date}
                                                  thumbnail={postCard.frontmatter.thumbnail}/>
                                    </Col>
                                );
                            })}
                        </Row>
                    );
                })}
            </div>
        </DefaultLayout>
    );
};

export default IndexPage;
