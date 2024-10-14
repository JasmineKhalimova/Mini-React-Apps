import React, { useState, useEffect } from "react";

const Search = () => {
    // State to store fetched news articles
    const [news, setNews] = useState([]);

    // Function to fetch news from the API
    const fetchNews = () => {
        fetch("http://hn.algolia.com/api/v1/search?query=react")
        .then(result => result.json())
        .then(data => setNews(data.hits))  // Correct access to "hits"
        .catch(error => console.log(error));
    };

    // useEffect hook: Fetch news once when the component mounts
    useEffect(() => {
        // Fetches news on component mount
        fetchNews();
    }, []);  // Empty array ensures this runs only once

    return (
        <div className="mt-4">
            <h2>Search Component</h2>
            {/* Map through the news array and render titles */}
            {news.map((n, i) => (
                <p key={i}>{n.title}</p>
            ))}
        </div>
    );
};

export default Search;
