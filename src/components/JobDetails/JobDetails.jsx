import { HiLocationMarker, HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiFillCalendar, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  console.log(contact_information.phone);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully!");
  };

  return (
    <div>
      <Helmet>
        <title>Career Hub | Job Details</title>
      </Helmet>
      <div className="grid md:grid-cols-4 gap-6 my-28">
        <div className="col-span-3 text-justify space-y-6">
          <p>
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold"> Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences: </span> {experiences}
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-6">Job Details</h2>
          <hr />
          <div className="my-6 space-y-4">
            <p>
              <span className="flex gap-1 items-center">
                <HiOutlineCurrencyDollar className="text-[#7E90FE] text-xl" />
                <span className="font-semibold">Job Title: </span>
                {salary}
              </span>
            </p>
            <p>
              <span className="flex gap-1 items-center">
                <AiFillCalendar className="text-[#7E90FE] text-xl" />
                <span className="font-semibold">Salary: </span>
                {job_title}
              </span>
            </p>
          </div>
          <hr />
          <div className="my-6 space-y-4">
            <p>
              <span className="flex gap-1 items-center">
                <AiFillPhone className="text-[#7E90FE] text-xl" />
                <span className="font-semibold">Phone: </span>
                {contact_information.phone}
              </span>
            </p>
            <p>
              <span className="flex gap-1 items-center">
                <AiOutlineMail className="text-[#7E90FE] text-xl" />
                <span className="font-semibold">Email: </span>
                {contact_information.email}
              </span>
            </p>
            <p>
              <span className="flex gap-1 ">
                <HiLocationMarker className="text-[#7E90FE] text-3xl" />
                <span className="font-semibold">address: </span>
                {contact_information.address}
              </span>
            </p>
          </div>
          <button
            onClick={handleApplyJob}
            className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
