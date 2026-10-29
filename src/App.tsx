import { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import type { Job } from "./types";

const initialJobs: Job[] = [
  {
    id: 1,
    company: "Echotalk",
    role: "Web Development Intern",
    status: "Applied",
    date: "2026-10-23",
  },

  
  {
    id: 2,
    company: "Storebox",
    role: "Junior AI Web Designer",
    status: "Interview",
    date: "2026-10-22",
  },
  {
    id: 3,
    company: "DataVinci",
    role: "Junior Web Analytics Developer",
    status: "Applied",
    date: "2026-10-22",
  },
    {
    id: 4,
    company: "Simpli Intern",
    role: "Web Developer",
    status: "Applied",
    date: "2026-10-24",
  },
];

function App() {
  const [jobs, setJobs] = useState<Job[]>(() => {
  const saved = localStorage.getItem("jobs");
  return saved ? JSON.parse(saved) : initialJobs;
});
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}, [jobs]);

  function handleAdd() {
    if (company.trim() === "" || role.trim() === "") return;

    const newJob: Job = {
      id: Date.now(),
      company,
      role,
      status: "Applied",
      date: new Date().toISOString().slice(0, 10),
    };

    setJobs([...jobs, newJob]);
    setCompany("");
    setRole("");
  }

  function handleDelete(id: number) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  return (
    <div>
      <h1>Job Tracker</h1>

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleAdd}>Add Job</button>

      {jobs.map((job) => (
                <JobCard key={job.id} job={job} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;