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
          allMdx(sort: {fields: frontmatter___date, order: ASC}) {
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
    const sortedPostCards = chunkedPostCards.reverse();

    return (
        <DefaultLayout>
            <div className={"main-page"}>
                {sortedPostCards.map(index => {
                    return (
                        <Row key={index}>
                            {index.map(postCard => {
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
