// "AI에게 묻기" 설정. 답변은 worker/ 의 Cloudflare Worker가 만든다.

// Cloudflare Turnstile 사이트 키(공개 값). 비어 있으면 프로덕션 빌드에서 기능 전체가 꺼진다.
const TURNSTILE_SITE_KEY_PROD = "0x4AAAAAAGGbNZeJCi-Vt7Mv";
// 항상 통과하는 Cloudflare 공식 테스트 키. 로컬 개발 전용.
const TURNSTILE_SITE_KEY_DEV = "1x00000000000000000000AA";

const ASK_ENDPOINT_PROD = "https://ask.doyeong.dev";
const ASK_ENDPOINT_DEV = "http://localhost:8787";

export const TURNSTILE_SITE_KEY = import.meta.env.DEV
  ? TURNSTILE_SITE_KEY_DEV
  : TURNSTILE_SITE_KEY_PROD;
export const ASK_ENDPOINT = import.meta.env.DEV ? ASK_ENDPOINT_DEV : ASK_ENDPOINT_PROD;
export const ASK_ENABLED = TURNSTILE_SITE_KEY !== "";

// Worker의 검증 한도와 맞춘다 (worker/src/index.ts).
export const ASK_MAX_QUESTION_LENGTH = 300;

// 추천 질문. Worker는 이 질문들의 답변을 캐시해 API를 다시 호출하지 않는다.
export const ASK_SUGGESTIONS = [
  "어떤 개발자인가요?",
  "어떤 프로젝트를 진행했나요?",
  "AI와 어떻게 일하나요?",
  "최근에 쓴 글을 소개해 주세요",
];
