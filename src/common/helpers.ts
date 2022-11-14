import moment from 'moment';

export const isEditPage = () => {
  return window.location.href.includes('edit');
};

export const isNewPage = () => {
  return window.location.href.includes('new');
};

export const getBoardOrTaskId = () => {
  const lastHrefPath = window.location.href.split('/').pop();

  if (isEditPage()) {
    return parseInt(window.location.href.split('/').reverse()[1]);
  }

  return isNewPage() || !lastHrefPath ? null : parseInt(lastHrefPath);
};

export const formatDate = (date: string) => {
  return moment(date).format('DD.MM.YYYY HH:mm');
};

export const convertFileToImageUrl = (file: File) => {
  return URL.createObjectURL(file);
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      resolve((event.target?.result as string) || '');
    };

    reader.readAsDataURL(file);
  });
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
