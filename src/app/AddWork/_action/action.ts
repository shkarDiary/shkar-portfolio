"use server";

import prisma from "@/../lib/prisma";
type PostParams = {
  name: string;
  url: string;
};

const postsWork = async ({ name, url }: PostParams) => {
  const res = await prisma.post.create({
    data: { url, name },
  });
  return res;
};
export default postsWork;
