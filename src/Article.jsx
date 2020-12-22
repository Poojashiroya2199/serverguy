import React, { useState } from "react";
import { articles } from "./data";
import { Link } from "react-router-dom";
import Pagination1 from "./Pagination";
export default function Article({ list }) {
  let len = Math.ceil(list.length / 10);
  return (
    <>
      <div className="article">
        {list.map((el) => (
          <article className="story">
            <div className="linkname">
              <div key={el.title} type="none">
                {el.title}
              </div>
              <a href={el.link} className="link" target="_blank">
                ({el.link})
              </a>
            </div>
            <div className="comments">
              <Link className="link" to="/description">
                {el.points} points{" "}
              </Link>{" "}
              |
              <Link className="link" to="/description">
                {el.company}{" "}
              </Link>{" "}
              |
              <Link className="link" to="/description">
                {el.time}
              </Link>{" "}
              |
              <Link className="link" to="/description">
                {el.comments} comments{" "}
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="pagination">
        <Pagination1 length={len} />
        <footer className="footer">
          About | Setting | Help | API Documentation | Hacker News |
          Fork/Contibute | Cool Apps
        </footer>
      </div>
    </>
  );
}
