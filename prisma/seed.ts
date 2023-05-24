import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type Post = {
  title: string;
  body: string;
};

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts } = await response.json();
  return posts as Post[];
}

function slugify(text: string) {
  return text
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

async function main() {
  const posts = await getPosts();
  for (const post of posts) {
    await db.post.create({
      data: {
        title: post.title,
        content: post.body,
        slug: slugify(post.title),
      },
    });
  }
}
/**
 * set up prisma seed file and code here
 * set up script in package json for prisma to automate generate database
 * run "npx prisma migrate dev --name init" to build db
 */
main();
