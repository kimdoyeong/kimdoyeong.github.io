// AI 답변용 컨텍스트. 사이트에 이미 공개된 프로필, 개발 기록, 글을 한 덩어리로 묶는다.
// Worker가 이 파일을 읽어 시스템 프롬프트에 넣으므로, 글을 배포하면 AI도 함께 갱신된다.
import type { APIRoute } from "astro";
import storyRaw from "../content/story/index.md?raw";
import { ASK_SUGGESTIONS } from "../lib/ask";
import { getPostPath, getPosts } from "../lib/posts";
import { hobbies, milestones, projects, skills } from "../lib/profile";
import { SITE_AUTHOR, SITE_DESCRIPTION } from "../lib/site";

const rawPosts = import.meta.glob<string>("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function rawPost(file: string) {
  const raw = rawPosts[`../content/posts/${file}.md`];
  if (raw === undefined) {
    throw new Error(`${file}.md: 원문을 찾을 수 없습니다.`);
  }
  return raw;
}

/** front matter와 이미지를 걷어 내 본문 텍스트만 남긴다. */
function cleanMarkdown(raw: string) {
  return raw
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/<figure>[\s\S]*?<\/figure>/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function profileText() {
  const lines = [
    `이름: ${SITE_AUTHOR} (Doyeong Kim)`,
    `사이트 소개: ${SITE_DESCRIPTION}`,
    "연락처: 이메일 hello@doyeong.dev, GitHub https://github.com/kimdoyeong, LinkedIn https://www.linkedin.com/in/doyeong-kim-97a1083a1/",
    `다루는 기술: ${skills.join(", ")}`,
    `취미: ${hobbies.join(", ")}`,
    "",
    "## 사이드 프로젝트",
  ];

  for (const project of projects) {
    const meta = [project.period, project.role, project.status].filter(Boolean).join(" · ");
    lines.push("", `### ${project.name} (${meta})`, project.summary);
    lines.push(...project.points.map((point) => `- ${point}`));
    lines.push(`기술: ${project.stack.join(", ")}`);
    if (project.link) {
      lines.push(`${project.link.label}: ${project.link.href}`);
    }
  }

  lines.push("", "## 걸어온 길");
  for (const milestone of milestones) {
    for (const item of milestone.items) {
      lines.push(`- ${milestone.year}: ${item.title}${item.detail ? ` — ${item.detail}` : ""}`);
    }
  }

  return lines.join("\n");
}

function document(attrs: Record<string, string>, body: string) {
  const attrText = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value.replaceAll('"', "'")}"`)
    .join(" ");
  return `<document ${attrText}>\n${body}\n</document>`;
}

export const GET: APIRoute = () => {
  const documents = [
    document({ title: "프로필", url: "/" }, profileText()),
    document({ title: "개발 기록", url: "/story/" }, cleanMarkdown(storyRaw)),
    ...getPosts(false).map((post) =>
      document(
        {
          title: post.title,
          url: getPostPath(post),
          date: post.publishedAt,
          tags: post.tags.join(", "),
        },
        cleanMarkdown(rawPost(post.file)),
      ),
    ),
  ];

  return new Response(
    JSON.stringify({ context: documents.join("\n\n"), suggestions: ASK_SUGGESTIONS }),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
};
