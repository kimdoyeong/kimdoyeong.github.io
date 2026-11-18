-- AI가 방문자에게 보낸 답변. 한도에 걸려 답하지 못한 질문은 NULL이다.
ALTER TABLE questions ADD COLUMN answer TEXT;
