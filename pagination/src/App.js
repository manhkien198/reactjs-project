import { useEffect, useState } from "react/cjs/react.development";
import Followers from "./Followers";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const handlePrev = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const handleNext = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const handleChange = (i) => {
    setPage(i);
  };
  return (
    <main>
      <div className="section-title">
        <h1 className="title">{loading ? "Loading" : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Followers key={item.id} {...item} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrev}>
              prev
            </button>
            {data.map((item, i) => {
              return (
                <button
                  key={i}
                  className={`page-btn ${page === i ? "active-btn" : null}`}
                  onClick={() => handleChange(i)}
                >
                  {i + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
