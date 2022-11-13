import { useCustomDropzone } from './useCustomDropzone';
import './dropzone.css';
import { CloudUploadOutlined } from '@mui/icons-material';

export interface CustomDropzoneProps {
  type: 'image' | 'file';
  changeFile: (newFile: File | null) => void;
}

export const CustomDropzone = ({ type = 'file', changeFile }: CustomDropzoneProps) => {
  const { fileName, getRootProps, getInputProps, image } = useCustomDropzone({ type, changeFile });

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <CloudUploadOutlined style={{ color: 'var(--grey-color)' }} sx={{ fontSize: 40 }} />
        <p className="dropzone__text">Drag 'n' drop image here, or click to select files</p>
        <p className="dropzone__accepted">(Only *.jpeg and *.png images will be accepted)</p>
      </div>
      <div className="dropzone__file">{fileName}</div>
      {type === 'image' && image && (
        <div className="dropzone__image">
          <img src={image} alt="" />
        </div>
      )}
    </div>
  );
};
