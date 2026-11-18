-- 질문을 보낸 페이지 경로 (예: /, /story/). 방문자 브라우저가 알려 준 값이다.
ALTER TABLE questions ADD COLUMN page TEXT;
