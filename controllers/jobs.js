const getAllJobs = async (req, res) => {
  console.log("get all jobs");
};

const getJob = async (req, res) => {
  console.log("get job");
};

const createJob = async (req, res) => {
  res.json(req.user);
};

const updateJob = async (req, res) => {
  console.log("updateJob");
};

const deleteJob = async (req, res) => {
  console.log("delete job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
