import { phoneRegex } from "./utils";

export const ZOD_SCHEMA_TYPES = {
  phone: z.string().regex(phoneRegex, "Enter a valid phone number"),
  text: z.string(),
  number: z.number(),
  email: z.string().email(),
};
