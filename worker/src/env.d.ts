// `wrangler secret put`으로 넣는 값은 wrangler.jsonc에 없어 생성된 타입에 빠진다.
interface Env {
  ANTHROPIC_API_KEY: string;
  TURNSTILE_SECRET: string;
  /** 로컬 테스트에서 가짜 API 서버를 가리킬 때만 쓴다. */
  ANTHROPIC_BASE_URL?: string;
}
