import { useDropzone } from 'react-dropzone';
import { CustomDropzoneProps } from './dropzone';
import { useEffect } from 'react';
import { convertFileToImageUrl } from '../../common/helpers';

export const useCustomDropzone = ({ type, changeFile }: CustomDropzoneProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const file = acceptedFiles?.length ? acceptedFiles[0] : null;

  const fileName = file?.name;
  const image = file && type === 'image' ? convertFileToImageUrl(file) : undefined;

  useEffect(() => {
    changeFile(file);
  }, [changeFile, file]);

  return {
    getRootProps,
    getInputProps,
    fileName,
    image
  };
};
