import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Nav from "../components/nav";

import postsData from "../posts";

// Dynamically import the blog posts
// postsData.forEach(post => {
// 	post.file = import("../pages" + post.filePath.replace("pages", ""));
// });

const PostPreview = styled.div`
  border: 1.15px solid rgba(0, 0, 0, 0.15);

  flex: 0 0 30%;

  position: relative;

  transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out,
    transform 0.25s ease-in-out;
  cursor: pointer;
  padding: 1rem;
  margin: 3em 1em;
  background-color: #fff;

  :hover {
    box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.3);
    border: 1.15px solid rgba(0, 0, 0, 0.1);
    transform: scale(1.01);

    .post-title .title-text {
      :after {
        right: -2px;
      }
    }
  }

  .meta {
    position: absolute;
    .author{
       left: -20em;
    }
    bottom: 105%;
    display: flex;
    * {
      margin: 0 5px;
    }
  }
  &.selected {
		width: 100%;
		height: 100%;
		max-width: 40%;
		max-height: 60%;

		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: auto;

		transition: z-index 0.5s step-start;
		z-index: 3000;

		padding: 1em;
  }
  .post-title {
    font-size: 2.5em;
    margin: 1rem;

    .title-text {
      position: relative;
      text-overflow: no-wrap;
      :after {
        position: absolute;
        content: "";
        left: 0px;
        right: 100%;
        bottom: 0px;
        height: 3px;
        background-color: rgba(0, 200, 0, 0.5);

        transition: right 0.25s ease-in-out;
      }
    }
  }
  .content {
    padding: 1em;
    max-height: 12em;
    overflow: hidden;
  }
`;
const BlogIndex = ({ p: { title, urlPath, publishDate, BlogPost, meta } }) => {
  return (
    <PostPreview>
      <div className="meta">
        <div className="avatar"><img src={meta.avatar} style={{width:'10%', length:
        '10%'}} alt={"Image of Author"}/></div>
        <div className="author">{meta.author}</div> &#8226;
        <div className="date">{publishDate}</div>
      </div>
      <h2 className="post-title">
        <span className="title-text">{title}</span>
      </h2>
      <div className="content">
        <BlogPost />
      </div>
    </PostPreview>
  );
};

const BlogIndexContainer = styled.div`
  width: 70%;
  margin: 4em auto;

  .title {
    font-size: 3em;
    margin: 2em 0em 1em 0em;
  }

  .post-list {
    display: flex;
    flex-direction: column;
  }
`;
const PageContainer = styled.section`
  /* width: 100vw; */
  /* height: 100vh; */
  overflow: auto;
  background-color: #eee;
`;
const blogPage = ({ posts = postsData }) => (
  <>
    <Head>
      <title>Blog Posts</title>
    </Head>
    <Nav />
    <PageContainer>
      <BlogIndexContainer>
        <div className="title-container">
          <h1 className="title">Blog posts</h1>
        </div>
        <div className="post-list">
          {posts.map(p => (
            <BlogIndex p={p} />
          ))}
        </div>
      </BlogIndexContainer>
    </PageContainer>
  </>
);

// Before page loads await the dynamic components. prevents blog preview page flash.
blogPage.getInitialProps = async () => {
  // await Promise.all(
  // 	postsData.map(async post => {
  // 		const file = await post.file;
  // 		post.BlogPost = file.default;
  // 		post.meta = file.meta;
  // 		return post;
  // 	})
  // );

  postsData.forEach(a => {
    a.meta = {
      author: "Andrew Lisowski",
      authorLink: "https://github.intuit.com/alisowski",
      avatar: "https://avatars2.githubusercontent.com/u/1192452?s=400&v=4",
      publishDate: "2018-05-10T12:00:00Z",
      title: "First Post"
    };
    a.BlogPost = () => (
      <div>
        <h1>Hello</h1>
        <p>lorem ipusm dolor sit amet</p>
        <p>asdfasdf</p>
        <h2>asdfasdfasd</h2>
        <h2>asdfasdfasd</h2>
        <h2>asdfasdfasd</h2>
        <h2>asdfasdfasd</h2>
        <h2>asdfasdfasd</h2>
        <h2>asdfasdfasd</h2>
      </div>
    );
  });

  return { posts: [...postsData] };
};

export default blogPage;
