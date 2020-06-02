// @ts-ignore
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";

import DefaultLayout from "../components/layouts/defaultLayout";
import PostCard from "../components/postCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeaturedPostCard = ({ card }) => {
  if (!card) return null;

  const postCard = card[0][0];
  return (
    <Row>
      <Col key={postCard.id} md={12} xs={12}>
        <PostCard
          key={postCard.id}
          title={postCard.frontmatter.title}
          tags={postCard.frontmatter.tags}
          author={postCard.frontmatter.author}
          slug={postCard.frontmatter.slug}
          description={postCard.frontmatter.description}
          date={postCard.frontmatter.date}
          thumbnail={postCard.frontmatter.thumbnail}
        />
      </Col>
    </Row>
  );
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
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
  const featured = postCardInfo.length % 2 != 0;

  return (
    <DefaultLayout>
      <div className={"main-page"}>
        <FeaturedPostCard
          card={featured ? sortedPostCards.splice(0, 1) : undefined}
        />
        {sortedPostCards.map((card, index) => {
          return (
            // using index as key isn't really recommended but might be fine
            <Row key={index}>
              {card.map(postCard => {
                return (
                  <Col key={postCard.id} md={6} xs={12}>
                    <PostCard
                      key={postCard.id}
                      title={postCard.frontmatter.title}
                      tags={postCard.frontmatter.tags}
                      author={postCard.frontmatter.author}
                      slug={postCard.frontmatter.slug}
                      description={postCard.frontmatter.description}
                      date={postCard.frontmatter.date}
                      thumbnail={postCard.frontmatter.thumbnail}
                    />
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
