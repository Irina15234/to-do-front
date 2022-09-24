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
