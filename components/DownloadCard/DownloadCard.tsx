import React from "react";
import DownloadIcon from "../Icons/DownloadIcon";
import FileIcon from "../Icons/FileIcon";

interface Props {
  text: string;
  downloadURL?: string;
}

export default function DownloadCard({ text, downloadURL }: Props) {
  return (
    <div
      className="flex items-center justify-between rounded-xl bg-primary-bg p-3 hover:cursor-pointer"
      onClick={() => {
        window.location.href = `${downloadURL}`;
      }}
    >
      <div className="flex items-center space-x-4">
        <FileIcon />
        <p>{text}</p>
      </div>
      <DownloadIcon />
    </div>
  );
}
