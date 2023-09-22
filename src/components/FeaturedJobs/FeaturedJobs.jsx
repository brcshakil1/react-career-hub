import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // This is the length of data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6  my-16">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === 6 ? "hidden" : ""}>
        <div className="flex justify-center mb-20">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            Show all jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
