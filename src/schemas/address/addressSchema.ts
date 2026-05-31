import z from "zod";

export const AddressSchema = z.object({
  name: z.string().trim().min(1, { error: "El nombre es obligatorio" }),
  lastname: z.string().trim().min(1, { error: "El apellido es obligatorio" }),
  address: z.string().trim().min(1, { error: "La dirección es obligatoria" }),
  addressOptional: z.string().trim().optional(),
  code: z.string().trim().min(1, { error: "El código postal es obligatorio" }),
  city: z.string().trim().min(1, { error: "La ciudad es obligatoria" }),
  country: z.string().trim().min(1, { error: "El país es obligatorio" }),
  phone: z.string().trim().min(1, { error: "El teléfono es obligatorio" }),
});

export type AddressInput = z.infer<typeof AddressSchema>;
