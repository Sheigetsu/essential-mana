// @ts-ignore
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";

import DefaultLayout from "../components/layouts/defaultLayout";
import PostCard from "../components/postCard";
import Search from "../components/search";
import { Row, Col } from "react-bootstrap";

const SearchTesting = () => {
  const [search, setSearch] = useState("");
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

  const filtered = _.chunk(
    postCardInfo.filter(post => {
      if (post.frontmatter.title.toUpperCase().includes(search.toUpperCase()))
        return true;
      if (!post.frontmatter.tags) return false;
      for (let tag of post.frontmatter.tags)
        if (tag.toUpperCase().includes(search.toUpperCase())) return true;
      return false;
    }),
    3
  );

  const onSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <DefaultLayout>
      <Search onFilterChange={e => onSearch(e)} />
      <div style={{ paddingTop: "10px" }}>
        {filtered.map((owo, index) => {
          return (
            <Row key={index}>
              {owo.map((postCard: any) => {
                return (
                  <Col key={postCard.id} md={4}>
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

export default SearchTesting;
