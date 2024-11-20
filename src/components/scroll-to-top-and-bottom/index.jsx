import React, { useRef } from "react";
import UseFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) {
    return <h1>Loading ! Please try egain.</h1>;
  }

  if (pending) {
    <h1>Loading ! Please wait.</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To top</button>
      <h3>This is the bottom of the page</h3>
      <div ref={bottomRef}></div>
    </div>
  );
}
