type MarkdownContent = unknown;

export interface PostFrontmatter {
  title: string;
  description?: string;
  publishedAt: string;
  tags?: string[];
  readingTime?: number;
  draft?: boolean;
  slug?: string;
}

interface PostModule {
  frontmatter: PostFrontmatter;
  Content: MarkdownContent;
}

export interface Post extends PostFrontmatter {
  slug: string;
  tags: string[];
  Content: MarkdownContent;
}

const modules = import.meta.glob<PostModule>("../content/posts/*.md", {
  eager: true,
});

function assertDate(value: string, source: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(
      `${source}: publishedAt은 YYYY-MM-DD 형식이어야 합니다.`,
    );
  }
}

function parsePost(path: string, module: PostModule): Post {
  const filename = path.split("/").at(-1)?.replace(/\.md$/, "");

  if (!filename) {
    throw new Error(`${path}: 글 파일 이름을 읽을 수 없습니다.`);
  }

  const { frontmatter, Content } = module;
  assertDate(frontmatter.publishedAt, path);

  return {
    ...frontmatter,
    slug: frontmatter.slug ?? filename,
    tags: frontmatter.tags ?? [],
    Content,
  };
}

function dateValue(date: string) {
  return Number(date.replaceAll("-", ""));
}

export function getPosts(includeDrafts = !import.meta.env.PROD) {
  return Object.entries(modules)
    .map(([path, module]) => parsePost(path, module))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => dateValue(b.publishedAt) - dateValue(a.publishedAt));
}

export function getPostPath(post: Post) {
  const [year, month, day] = post.publishedAt.split("-");
  return `/writing/${year}/${month}/${day}/${post.slug}/`;
}

export function toDate(date: string) {
  return new Date(`${date}T00:00:00+09:00`);
}

export function formatShortDate(date: string) {
  return date.replaceAll("-", ".");
}

export function formatLongDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}
