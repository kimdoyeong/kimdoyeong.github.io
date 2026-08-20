import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPostPath, getPosts, toDate } from "../lib/posts";
import { SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";

export function GET(context: APIContext) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: getPosts(false).map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: toDate(post.publishedAt),
      link: getPostPath(post),
      categories: post.tags,
    })),
    customData: "<language>ko-KR</language>",
  });
}
