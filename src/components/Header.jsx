// 画像をそれぞれimportします。パスに注意してください。
import React from 'react';
import CoverImage from '../images/cover_image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';


export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">徳海亘奎</h1>
            <h3 className="title-text">プロダクトマネージャー</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/tokusea0120/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://github.com/tokusea/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

