"use server";

import { SignUpInput, SignUpSchema } from "@/schemas";
import { authService } from "@/services";

export async function signUpAction(input: SignUpInput) {
  //validar en el servidor
  const data = SignUpSchema.safeParse(input);

  if (!data.success) {
    return {
      success: "",
      error: "Hubo un error.",
    };
  }

  const response = await authService.register(data.data);

  return response;
}
