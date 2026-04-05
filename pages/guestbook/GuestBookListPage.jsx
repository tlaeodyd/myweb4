// src/pages/guestbook/GuestBookListPage.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGuestbook } from '../../hooks/useGuestbook';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;

  & > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  th,
  td {
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
    word-break: break-all;
  }

  th {
    background-color: #eee;
  }
`;

function GuestBookListPage() {
  const { guestbookList } = useSelector((state) => state.guestbook);
  const { hookGetGuestbooks } = useGuestbook();

  useEffect(() => {
    hookGetGuestbooks();
  }, []);

  return (
    <ListContainer>
      <h1>방명록 목록</h1>
      <hr />

      <StyledTable>
        <colgroup>
          <col style={{ width: '70%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>내용</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {guestbookList && guestbookList.length > 0 ? (
            guestbookList.map((vo) => (
              <tr key={vo.id}>
                <td>{vo.content}</td>
                <td>{vo.writer}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}> 등록된 방명록이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </ListContainer>
  );
}

export default GuestBookListPage;
