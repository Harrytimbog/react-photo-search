import React, { useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "MWgIgclHOy8TAZN9ooVUcQfS9nHtAnl_PwzpNCDuStM",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  console.log(pics);

  // const client_id = "MWgIgclHOy8TAZN9ooVUcQfS9nHtAnl_PwzpNCDuStM";
  // const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`;

  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log("Submitting the Form");
    unsplash.search
      .getPhotos({
        query: query,
      })
      .then((result) => {
        console.log(result.response.results);
        setPics(result.response.results);
      });
  };

  console.log(query);
  console.log(pics);

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
