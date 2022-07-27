import React, { useState, useEffect, useSyncExternalStore } from "react";

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [images, setimages] = useState([]);
    console.log(query);
    useEffect(() => {
      const key = 'https://pixabay.com/api/?key=28624635-c5f4a56957323e616074001f7'

      const fetchData = async () => {
        try {
          const response = await fetch(key);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log("error",error);
        }
      };

      fetchData();
    }, []);

    return (
      <>
        <form className="form"> 
          <label className="label" htmlFor="query"> 
            {" "}
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Try "flag" or "flower"`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {
          images.map((image) => 
            <div className="card" key={image.id}>
              <img
                className="card--image"
                alt={image.alt_description}
                src={image.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)}
      </div>
    </>
  );
}