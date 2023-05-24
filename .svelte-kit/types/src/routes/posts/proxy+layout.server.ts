// @ts-nocheck
import type { LayoutServerLoad } from "./$types";
import db from "../../lib/database";

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
  const posts = await db.post.findMany({
    select: {
      title: true,
      slug: true,
    },
    take: 4,
  });
  return { posts };
};
