export interface Project {
  name: string;
  period: string;
  role: string;
  status?: string;
  summary: string;
  points: string[];
  stack: string[];
  link?: { href: string; label: string };
}

export const projects: Project[] = [
  {
    name: "FMS",
    period: "2026.08 —",
    role: "개인 프로젝트",
    status: "운영 중",
    summary: "1TB 개인 영상 컬렉션을 위한 셀프 호스팅 라이브러리",
    points: [
      "PRD와 사용자 시나리오로 요구사항을 정의하고, TDD 규칙과 안티패턴 문서로 AI 구현을 관리",
      "저전력 N100 서버와 SMB 저장소에 맞춰 원본을 다시 읽지 않는 미리보기 구조와 AI 없는 쇼츠 구간 선택 방식을 설계",
      "Docker Compose와 Forgejo CI로 릴리스 브랜치 기반 자동 배포를 구성해 7회 릴리스",
    ],
    stack: ["Bun", "Hono", "Drizzle", "React 19", "TanStack", "Tauri"],
  },
  {
    name: "Space",
    period: "2019",
    role: "4인 팀 · 팀장",
    summary: "물건 대여 중개 플랫폼",
    points: [
      "서버를 거의 혼자 개발하고 프런트엔드 개발에도 참여",
      "Koa와 React로 데이터 요청 수집, 대기, HTML 렌더링, hydration까지 이어지는 SSR 파이프라인을 직접 구현",
      "프리페치 상태와 Redux store를 요청별로 분리하고, 상태·CSS·청크 정보와 쿠키 기반 인증 정보의 전달을 구현",
    ],
    stack: ["Koa", "React", "Redux", "styled-components"],
    link: { href: "https://github.com/sunrinsurf/space-frontend", label: "코드" },
  },
  {
    name: "To3mato",
    period: "2026",
    role: "개인 프로젝트",
    summary: "포모도로와 할 일 관리 앱",
    points: [
      "계층형 할 일을 걷어 내 완료 기준을 단순하게 정리",
      "창 닫기가 타이머 종료로 이어지던 동작을 창 숨김으로 바꾸고 동작을 검증",
    ],
    stack: ["Svelte"],
    link: { href: "https://to3mato.doyeong.dev", label: "사이트" },
  },
  {
    name: "EPUB Translator",
    period: "2020",
    role: "개인 프로젝트",
    summary: "EPUB을 읽어 번역한 뒤 다시 묶는 데스크톱 도구",
    points: [
      "container, OPF, spine을 읽어 본문을 번역한 뒤 다시 EPUB으로 묶는 Electron 데스크톱 도구",
    ],
    stack: ["Electron", "TypeScript", "React", "Redux", "Papago API"],
    link: { href: "https://github.com/kimdoyeong/epub-translator", label: "코드" },
  },
  {
    name: "React 교육",
    period: "2020",
    role: "교내 동아리",
    summary: "Web/Server 수업 교재와 강의",
    points: ["41쪽 분량의 React 교재 THE BASIC OF REACT를 혼자 쓰고 직접 강의"],
    stack: ["React"],
  },
];

export interface Milestone {
  year: string;
  items: { title: string; detail?: string }[];
}

export const milestones: Milestone[] = [
  {
    year: "2019",
    items: [
      { title: "선린인터넷고등학교 입학", detail: "소프트웨어과" },
      { title: "다수 대회 수상" },
    ],
  },
  {
    year: "2022",
    items: [{ title: "서강대학교 입학" }],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Svelte",
  "Node.js",
  "Koa",
  "Express",
  "Bun · Hono",
  "Electron",
  "Tauri",
  "Docker",
];

export const hobbies = ["커피", "테크", "오디오", "게임"];
