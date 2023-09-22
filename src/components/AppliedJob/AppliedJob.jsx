import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  console.log(job);
  return (
    <div className="flex justify-between items-center border rounded-md p-6 my-6">
      <div className="flex items-center gap-20">
        <img src={logo} alt="" className="w-[120px]" />
        <div>
          <h2 className="card-title ">{job_title}</h2>
          <p className="text-[#757575] pt-1">{company_name}</p>
          <div className="flex gap-4 mt-4">
            <button className="border rounded border-[#7E90FE] font-extrabold py-2 px-4 text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="border rounded border-[#7E90FE] font-extrabold py-2 px-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4 my-5">
            <h2 className="flex gap-1">
              <IoLocationSharp className="text-2xl" />
              <span>{location}</span>
            </h2>
            <h2 className="flex gap-1">
              <HiOutlineCurrencyDollar className="text-2xl" />
              <span>{salary}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
          <Link to={`/job/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
