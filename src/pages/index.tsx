// @ts-ignore
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import DefaultLayout from "../components/layouts/defaultLayout";
import PostCard from "../components/postCard";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              tags
              title
            }
          }
        }
      }
    }
  `);

  const postCardInfo = data.allMdx.edges.map(edge => edge.node.frontmatter);

  return (
    <DefaultLayout>
      <h1>Post List</h1>
      {postCardInfo.map(data => {
        return (
          <PostCard
            key={data.title}
            title={data.title}
            tags={data.tags || []}
          />
        );
      })}
    </DefaultLayout>
  );
};

export default IndexPage;
