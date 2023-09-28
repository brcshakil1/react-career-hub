import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const jobs = useLoaderData();

  const handleDisplayJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJodIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJodIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJodIds) {
        const job = jobs.find((job) => job.id === id);
        jobsApplied.push(job);
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <Helmet>
        <title>Career Hub | Applied Job</title>
      </Helmet>
      <div className="py-36">
        <h2 className="text-3xl font-bold text-center">Applied Job</h2>
      </div>
      <div className="dropdown dropdown-bottom flex justify-end">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleDisplayJobs("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleDisplayJobs("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleDisplayJobs("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <div className="mb-20">
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
