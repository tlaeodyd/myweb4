const STORAGE_KEY = 'guestbook_list';

export const apiGetGuestbookList = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const apiInsertGuestbook = (newVo) => {
  const oldList = apiGetGuestbookList();

  const newEntry = {
    ...newVo,
    no: Date.now(),
    createdAt: new Date().toLocaleString(),
  };

  const newList = [newEntry, ...oldList];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));

  return { result: 1 };
};
