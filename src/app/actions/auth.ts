"use server";
import { FormState, SigninFormSchema } from "@/app/lib/definition";
import prisma from "../../../lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signin(formData: FormData) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const data = await prisma.user.findMany({});
  console.log(data[0]);
  if (data[0].email === validatedFields.data.email) {
    cookies().set("email", data[0].email, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      path: "/",
    });
    redirect("/AddWork");
  }
}
