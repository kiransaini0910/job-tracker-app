import { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import type { Job, Status } from "./types";

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

    const [filter, setFilter] = useState<Status | "All">("All");

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

  function handleStatusChange(id: number, status: Status) {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status } : job)));
  }

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  function count(status: Status) {
    return jobs.filter((job) => job.status === status).length;
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

      <p>
        Applied: {count("Applied")} | Interview: {count("Interview")} | Offer:{" "}
        {count("Offer")} | Rejected: {count("Rejected")}
      </p>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as Status | "All")}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}

export default App;