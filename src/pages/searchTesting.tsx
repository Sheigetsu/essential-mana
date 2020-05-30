// @ts-ignore
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import DefaultLayout from "../components/layouts/defaultLayout";
import PostCard from "../components/postCard";
import Search from "../components/search";

const SearchTesting = () => {
  const [search, setSearch] = useState("");
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

  const filtered = postCardInfo.filter(post => {
    if (post.frontmatter.title.toUpperCase().includes(search.toUpperCase()))
      return true;
    if (!post.frontmatter.tags) return false;
    for (let tag of post.frontmatter.tags)
      if (tag.toUpperCase().includes(search.toUpperCase())) return true;
    return false;
  });

  const onSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <DefaultLayout>
      <Search onFilterChange={e => onSearch(e)} />
      <div style={{ paddingTop: "10px" }}>
        {filtered.map(post => {
          return (
            <PostCard
              key={post.id}
              title={post.frontmatter.title}
              tags={post.frontmatter.tags || []}
            />
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default SearchTesting;
