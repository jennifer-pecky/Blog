import React from 'react';
import './header.css';
import { ImBlogger } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
import { TfiYoutube } from 'react-icons/tfi';
import { CgGoogle } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="links">
          <Link href={'/'} className="links">
            <a className="love">
              <ImBlogger color="222222" />
            </a>
            <a className="love">
              <BsInstagram color="222222" />
            </a>
            <a className="love">
              <TfiYoutube color="222222" />
            </a>
            <a className="love">
              <ImTwitter color="222222" />
            </a>
            <a className="love">
              <CgGoogle color="222222" />
            </a>
          </Link>
        </div>

        <div className="headlines">
          <Link href={'/'} className="links__tag">
            <a>Blog</a>
            <a>Header</a>
            <a>Sports</a>
          </Link>
        </div>

        <div className="logo">
          <Link href={'/'}>
            <a>
              <b>Binq_Blog</b>
            </a>
          </Link>
        </div>

        <div className="headlines">
          <Link href={'/'} className="links__tag">
            <a>Shop</a>
            <a>Features</a>
            <a>Posts</a>
          </Link>
        </div>

        <div className="search">
          <input type="text" placeholder="Search" className="input" />
        </div>
      </div>
    </header>
  );
};

export default Header;
