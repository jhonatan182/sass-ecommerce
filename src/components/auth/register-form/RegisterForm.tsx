"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

import { Form, FormError, FormInput, FormLabel } from "@/components";
import { SignUpInput, SignUpSchema } from "@/schemas";
import { signUpAction } from "@/actions";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignUpInput) => {
    const { error, success } = await signUpAction(data);

    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    if (success) {
      toast.success(success);
      redirect("/auth/login");
      reset();
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre completo</FormLabel>
      <FormInput type="text" id="name" {...register("name")} />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormLabel htmlFor="email">Correo electrónico</FormLabel>
      <FormInput type="email" id="email" {...register("email")} />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput type="password" id="password" {...register("password")} />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="repeat-password">Confirmar contraseña</FormLabel>
      <FormInput
        type="password"
        id="repeat-password"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation && (
        <FormError>{errors.passwordConfirmation.message}</FormError>
      )}

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </Form>
  );
}
