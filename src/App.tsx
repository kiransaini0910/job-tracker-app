import JobCard from "./components/JobCard";
import type { Job } from "./types";

const jobs: Job[] = [
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
  return (
    <div>
      <h1>Job Tracker</h1>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;