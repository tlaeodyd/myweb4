import { useDispatch } from 'react-redux';
import { apiGetGuestbookList, apiInsertGuestbook } from '../api/guestbookApi';
import { setGuestbookList } from '../store/guestbookSlice';

export const useGuestbook = () => {
  const dispatch = useDispatch();

  const hookGetGuestbooks = () => {
    const list = apiGetGuestbookList();
    dispatch(setGuestbookList(list));
  };

  const hookInsertGuestbook = (vo) => {
    const { result } = apiInsertGuestbook(vo);
    if (result === 1) {
      hookGetGuestbooks();
    }
    return result;
  };

  return { hookGetGuestbooks, hookInsertGuestbook };
};
