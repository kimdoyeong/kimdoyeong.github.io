# doyeong.dev

Astro로 빌드하고 GitHub Pages에 배포하는 개인 칼럼 블로그입니다.

## 로컬에서 실행하기

Node.js 22 이상을 준비한 뒤 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321`을 엽니다. 타입 검사는 `npm run check`, 프로덕션 빌드는 `npm run build`, 빌드 결과 미리보기는 `npm run preview`로 실행합니다.

## 글 쓰기

1. `src/content/posts/first-post.md`를 복사해 원하는 영문 슬러그로 파일명을 바꿉니다.
2. front matter의 제목, 설명, 발행일, 태그, 읽기 시간을 수정합니다.
3. Markdown으로 본문을 작성합니다.
4. 공개할 때 `draft: false`로 바꾸거나 `draft` 항목을 지우고 커밋합니다.

`draft: true`인 글은 `npm run dev`에서는 보이지만 프로덕션 빌드, RSS, 사이트맵에는 포함되지 않습니다. 글 주소는 다음 규칙으로 자동 생성됩니다.

```text
/writing/YYYY/MM/DD/파일명/
```

## 배포

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정합니다. `master` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 정적 사이트를 빌드하고 배포합니다. 커스텀 도메인은 `public/CNAME`의 `doyeong.dev` 설정을 사용합니다.
