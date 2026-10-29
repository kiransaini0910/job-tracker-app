import type { Job, Status } from "../types";

const statusColors = {
  Applied: "#3b82f6",
  Interview: "#eab308",
  Offer: "#22c55e",
  Rejected: "#ef4444",
};

const statusOptions: Status[] = ["Applied", "Interview", "Offer", "Rejected"];

interface JobCardProps {
  job: Job;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: Status) => void;
}

function JobCard({ job, onDelete, onStatusChange }: JobCardProps) {
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
        <select
          value={job.status}
          onChange={(e) => onStatusChange(job.id, e.target.value as Status)}
          style={{ color: statusColors[job.status], fontWeight: "bold" }}
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </p>
      <p>Applied on: {job.date}</p>
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
}

export default JobCard;