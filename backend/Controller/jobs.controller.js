import linkedIn from '../Service/jobsService.js';

export const jobsController = (req, res) => {
    const { keyword, location, remoteFilter, salary, experienceLevel, sortBy, page } = req.body;


    const queryOptions = {
      keyword,
      location,
      dateSincePosted: "past Week",
      jobType: "full time",
      remoteFilter,
      salary,
      experienceLevel,
      limit: "10",
      sortBy: "recent",
      page,
      has_verification: false,
      under_10_applicants: false,
    };
    
    linkedIn.query(queryOptions).then((response) => {
      console.log(response); // An array of Job objects
      return res.status(200).json(response);
    });
}

