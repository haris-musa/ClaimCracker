import React, { useState, useEffect } from "react";

function ArticlesSection() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/research_papers/api/deep_learning_papers/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      className="flex flex-wrap relative items-center justify-center w-[100%] py-[8%]"
      id="articles"
    >
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-wrap lg:w-[30%] p-6 xl:w-[30%] sm:w-full w-full"
        >
          <div className="justify-around flex">
            <div
              className="bg-white border border-gray-300 shadow-lg flex flex-col"
              style={{ height: "420px" }}
            >
              <div className="p-5" style={{ flex: "1 0 auto" }}>
                <h5
                  className="text-2xl font-bold tracking-tight text-black mb-2"
                  style={{ height: "4.3rem", overflow: "hidden" }}
                >
                  {article.title}
                </h5>
                <p
                  className="font-normal text-gray-700 dark:text-gray-400"
                  style={{ height: "220px", overflow: "hidden" }}
                >
                  {article.summary}
                </p>
              </div>
              <div className="p-5" style={{ flex: "0 0 auto" }}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticlesSection;
