// @ts-ignore
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
            id
          }
        }
      }
    }
  `);

  const postCardInfo = data.allMdx.edges.map(edge => edge.node);

  return (
    <DefaultLayout>
      <h1>Post List</h1>
      {postCardInfo.map(data => {
        return (
          <PostCard
            key={data.id}
            title={data.frontmatter.title}
            tags={data.frontmatter.tags || []}
          />
        );
      })}
    </DefaultLayout>
  );
};

export default IndexPage;
