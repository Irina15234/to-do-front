export const isEditPage = () => {
  return window.location.href.includes('edit');
};

export const isNewPage = () => {
  return window.location.href.includes('new');
};

export const getBoardOrTaskId = () => {
  const lastHrefPath = window.location.href.split('/').pop();
  return isNewPage() || !lastHrefPath ? null : parseInt(lastHrefPath);
};
