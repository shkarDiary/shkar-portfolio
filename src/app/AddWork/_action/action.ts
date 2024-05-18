"use server";

import prisma from "@/../lib/prisma";
export const dynamic = "force-dynamic";
export const revalidate = 1;
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
