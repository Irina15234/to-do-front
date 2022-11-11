import { useDropzone } from 'react-dropzone';

export const useCustomDropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const fileName = acceptedFiles?.length ? acceptedFiles[0].name : '';

  return {
    getRootProps,
    getInputProps,
    fileName
  };
};
