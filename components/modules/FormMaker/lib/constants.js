import { z } from "zod";
import { phoneRegex } from "./utils";

//To do: fix phone zod
export const ZOD_SCHEMA_TYPES = {
  phone: z
    .string()
    .regex(phoneRegex, { message: "Please Enter a valid phone number" }),
  // phone: z.string(),
  text: z.string().min(2),
  number: z.number(),
  email: z.string().email(),
};
