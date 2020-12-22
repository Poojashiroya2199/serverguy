import React, { useState } from "react";
import Header from "./Header";
import Sort from "./Sort";
import Article from "./Article";
import { articles } from "./data";

export default function Home() {
  const list = articles;
  const [articlelist, setarticlelist] = useState(list);
  const handlechange = (event) => {
    const filtervalue = event.target.value;
    if (filtervalue === "") {
      setarticlelist(list);
    } else {
      const filteredlist = articlelist.filter(
        (article) =>
          article.title.toLowerCase().includes(filtervalue) ||
          article.company.toLowerCase().includes(filtervalue)
      );
      setarticlelist(filteredlist);
    }
  };
  return (
    <>
      <Header handlechange={handlechange} />
      <Sort length={articlelist.length} />
      <Article list={articlelist} />
    </>
  );
}
