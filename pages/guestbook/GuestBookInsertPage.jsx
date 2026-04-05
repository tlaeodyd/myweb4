import React, { useState } from 'react';
import { useGuestbook } from '../../hooks/useGuestbook';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
`;

const GuestBookInsertPage = () => {
  const [post, setPost] = useState({ writer: '', content: '' });
  const { hookInsertGuestbook } = useGuestbook();
  const navigate = useNavigate();

  const handleInsert = () => {
    if (!post.writer || !post.content) {
      return alert('내용을 입력하세요');
    }

    const newRecord = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };

    hookInsertGuestbook(newRecord);

    setPost({ writer: '', content: '' });
    alert('등록 완료!');

    navigate('/list');
  };

  return (
    <Container>
      <h1>방명록 등록</h1>
      <InputGroup>
        <input
          type="text"
          placeholder="작성자"
          value={post.writer}
          onChange={(evt) => setPost({ ...post, writer: evt.target.value })}
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={(evt) => setPost({ ...post, content: evt.target.value })}
        />
        <button onClick={handleInsert}>등록하기</button>
      </InputGroup>
    </Container>
  );
};

export default GuestBookInsertPage;
