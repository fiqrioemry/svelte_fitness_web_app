import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DownloadProgress() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Waiting for download...");

  const startDownload = () => {
    const videoURL = prompt("Enter Video URL:");
    if (!videoURL) return;

    setStatus("Downloading...");

    const eventSource = new EventSource(
      `http://localhost:8080/download?url=${encodeURIComponent(videoURL)}`
    );

    eventSource.onmessage = (event) => {
      console.log("Progress update:", event.data);
      let data = JSON.parse(event.data);

      if (data.percentage !== undefined) {
        setProgress(data.percentage);
      } else if (data.status) {
        setStatus(data.status);
      }

      if (data.status && data.status.startsWith("completed")) {
        eventSource.close();
        setStatus("Download Complete!");
      }
    };

    eventSource.onerror = () => {
      setStatus("Error during download!");
      eventSource.close();
    };
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-4 shadow-xl border rounded-md">
        <h2>Download Progress</h2>
        <Button onClick={startDownload}>Start Download</Button>
        <p>{status}</p>
        <progress value={progress} max="100"></progress>
      </div>
    </div>
  );
}
