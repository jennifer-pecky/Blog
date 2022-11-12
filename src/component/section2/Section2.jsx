import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './section2.css';
import { client, urlFor } from '../../lib/client';
import { useEffect } from 'react';
import moment from 'moment';

const Post = forwardRef(({ image, title, createdAt, body }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log(content);
    setContent(body[0].children[0].text);
  }, []);

  return (
    <Link to={`/blog/33`} className="item">
      <div className="w-72  h-40">
        <img
          src={urlFor(image)}
          className="rounded max-w-full max-h-full w-full h-full object-center object-cover"
          width={500}
          height={350}
        />
      </div>

      <div className="flex justify-center flex-col py-4">
        <a>
          {' '}
          <span>{title}</span> - {moment(createdAt).format('MMM Do YY')}
        </a>
      </div>

      <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
        {' '}
        <h1>{title}</h1>
      </a>

      <p className="text-gray-500 py-3">{content.substr(0, 100)}...</p>
    </Link>
  );
});

const Section2 = () => {
  const [post, setPost] = React.useState([]);
  const postQuery = `*[_type == "post"]`;
  React.useEffect(() => {
    client.fetch(postQuery).then((response) => {
      console.log(response);
      setPost(response);
    });
  }, []);

  console.log('post response', post);
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center heading">
        Trading Post
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {post.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            createdAt={post._createdAt}
            image={post.mainImage}
            body={post.body}
          />
        ))}
        {/* <Post /> */}
      </div>
    </section>
  );
};

export default Section2;
