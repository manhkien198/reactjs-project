import { useState, useEffect } from 'react'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  const fetchJob = async () => {
    const response = await fetch(url)
    const newJob = await response.json()
    setJobs(newJob)
    setLoading(false)
  }
  useEffect(() => {
    fetchJob()
  }, [])
  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, duties, dates, title } = jobs[value]
  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button key={job.id} className={`job-btn ${index === value && "active-btn"}`} onClick={() => setValue(index)}>
                {job.company}
              </button>
            )
          })}
        </div>
        <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="desc">
                <i className="fas fa-angle-double-right icon"></i>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
          <button className="btn-more">More Info</button>
    </section>
  );
}

export default App;
