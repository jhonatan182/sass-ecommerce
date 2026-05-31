"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { AddressInput, AddressSchema } from "@/schemas";
import {
  Form,
  FormInput,
  FormLabel,
  FormSelect,
  FormCheckbox,
  FormError,
} from "@/components";

export function AddressForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<AddressInput>({
    mode: "all",
    resolver: zodResolver(AddressSchema),
  });

  const onSubmit = (data: AddressInput) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="name">Nombres</FormLabel>
        <FormInput type="text" id="name" {...register("name")} />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="lastname">Apellidos</FormLabel>
        <FormInput type="text" id="lastname" {...register("lastname")} />
        {errors.lastname && <FormError>{errors.lastname.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="address">Dirección</FormLabel>
        <FormInput type="text" id="address" {...register("address")} />
        {errors.address && <FormError>{errors.address.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="address-optional">Dirección 2 (opcional)</FormLabel>
        <FormInput
          type="text"
          id="address-optional"
          {...register("addressOptional")}
        />
        {errors.addressOptional && (
          <FormError>{errors.addressOptional.message}</FormError>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="code">Código postal</FormLabel>
        <FormInput type="text" id="code" {...register("code")} />
        {errors.code && <FormError>{errors.code.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="city">Ciudad</FormLabel>
        <FormInput type="text" id="city" {...register("city")} />
        {errors.city && <FormError>{errors.city.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="country">País</FormLabel>
        <FormSelect
          id="country"
          {...register("country")}
          options={[
            { value: "", label: "[ Seleccione ]" },
            { value: "CRI", label: "Costa Rica" },
          ]}
        />
        {errors.country && <FormError>{errors.country.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2">
        <FormLabel htmlFor="phone">Teléfono</FormLabel>
        <FormInput type="tel" id="phone" {...register("phone")} />
        {errors.phone && <FormError>{errors.phone.message}</FormError>}
      </div>

      <div className="flex flex-col mb-2 sm:mt-1">
        <div className="inline-flex items-center mb-10">
          <FormCheckbox id="checkbox" />
          <FormLabel htmlFor="checkbox" className="ml-2">
            ¿Recordar dirección?
          </FormLabel>
        </div>

        <Link
          href="/checkout"
          className="btn-primary flex w-full sm:w-1/2 justify-center "
        >
          Siguiente
        </Link>
      </div>
    </Form>
  );
}
