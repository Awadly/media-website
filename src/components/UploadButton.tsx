import React from "react";

type Props = {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: React.FC<Props> = ({ onUpload }) => (
  <div className="upload-container">
    <label className="upload-button">
      Upload
      <input type="file" onChange={onUpload} className="file-input" />
    </label>
  </div>
);

export default UploadButton;
