-- 방문자가 AI에게 한 질문 기록. 통계용이며 IP는 저장하지 않는다.
CREATE TABLE questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,   -- UTC, ISO 8601
  day TEXT NOT NULL,          -- KST 날짜 (YYYY-MM-DD)
  question TEXT NOT NULL,
  turn INTEGER NOT NULL,      -- 대화에서 몇 번째 질문인지 (1부터)
  outcome TEXT NOT NULL,      -- answered | cached | ip_daily | global_daily
  country TEXT                -- Cloudflare가 판단한 국가 코드
);

CREATE INDEX questions_day ON questions (day);
