import { useCustomDropzone } from './useCustomDropzone';
import './dropzone.css';

export const CustomDropzone = () => {
  const { fileName, getRootProps, getInputProps } = useCustomDropzone();

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <p>(Only *.jpeg and *.png images will be accepted)</p>
      </div>
      <div className="dropzone__file">{fileName}</div>
    </div>
  );
};
