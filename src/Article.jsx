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
              <a className="link" href={el.points}>
                {el.points} points{" "}
              </a>{" "}
              |
              <a className="link" href={el.company}>
                {el.company}{" "}
              </a>{" "}
              |
              <a className="link" href={el.time}>
                {el.time}
              </a>{" "}
              |
              <a className="link" href={el.comments}>
                {el.comments} comments{" "}
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="pagination">
        <Pagination1 length={len} />
      </div>
    </>
  );
}
