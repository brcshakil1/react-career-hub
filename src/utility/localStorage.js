const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-applications');
    if(storedApplication) {
        return JSON.parse(storedApplication)
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id)
    if(!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplication, saveJobApplication}