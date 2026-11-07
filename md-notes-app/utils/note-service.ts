"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";


export async function addNote(formData: FormData) {
  const value = formData.get("mdFile");
  if (!(value instanceof File) || value.size === 0) {
    throw new Error("Choose a Markdown file first.");
  }
  
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);
  
  const newTitle = value.name;
  const newContent = await value.text();

  const { error } = await supabase
    .from("notes")
    .insert({ title: newTitle, content: newContent });
  if (error) throw error;
  revalidatePath("/");
}
