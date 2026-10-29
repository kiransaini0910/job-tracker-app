import type { Job } from "../types";

const statusColors = {
  Applied: "#3b82f6",
  Interview: "#eab308",
  Offer: "#22c55e",
  Rejected: "#ef4444",
};

interface JobCardProps {
  job: Job;
  onDelete: (id: number) => void;
}

function JobCard({ job, onDelete }: JobCardProps) {
  return (
    <div
      style={{
        border: "1px solid #888",
        borderRadius: "8px",
        padding: "12px",
        margin: "12px auto",
        maxWidth: "400px",
      }}
    >
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p>
        Status:{" "}
        <span style={{ color: statusColors[job.status], fontWeight: "bold" }}>
          {job.status}
        </span>
      </p>
      <p>Applied on: {job.date}</p>
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
}

export default JobCard;