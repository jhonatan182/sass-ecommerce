"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

import {
  Form,
  FormError,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components";
import { SignInInput, SignInSchema } from "@/schemas";
import { signInAction } from "@/actions";

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    mode: "all",
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInInput) => {
    setLoading(true);

    const { success, error } = await signInAction(data);
    if (error) {
      toast.error(error);
      setLoading(false);

      return;
    }
    if (success) {
      window.location.replace("/");
      toast.success(success);
      reset();
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">Correo electrónico</FormLabel>
      <FormInput type="email" id="email" {...register("email")} />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput type="password" id="password" {...register("password")} />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormSubmit value="Ingresar" disabled={loading} />

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </Form>
  );
}
