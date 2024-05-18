"use server";

import prisma from "@/../lib/prisma";
type PostParams = {
  name: string;
  url: string;
};

const postsWork = async ({
  name,
  url,
}: PostParams): Promise<{ succsess: boolean; msg: string }> => {
  try {
    const res = await prisma.post.create({
      data: { url, name },
    });
    return { succsess: true, msg: "post created" };
  } catch (error) {
    return { succsess: false, msg: JSON.stringify(error) };
  }
};
export default postsWork;
