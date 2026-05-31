"use server";

import { SignInInput, SignInSchema } from "@/schemas";
import { authService } from "@/services";

export async function signInAction(input: SignInInput) {
  //validar en el servidor
  const data = SignInSchema.safeParse(input);

  if (!data.success) {
    return {
      success: "",
      error: "Hubo un error.",
    };
  }

  const response = await authService.login(data.data);

  return response;
}
