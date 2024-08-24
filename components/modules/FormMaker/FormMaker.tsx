"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-accordion";
import { zodFormatter } from "./lib/helpers";

// const data = {
//   heading: "Contact us",
//   text: "",
//   items: [
//     {
//       title: "name",
//       type: "text",
//       defaultValue: "",
//       initialValue: "",
//     },
//     {
//       title: "phone",
//       type: "phone",
//       defaultValue: "",
//       initialValue: "",
//     },
//   ],
// };

export default function FormMaker({ data }) {
  const { formSchema, defaultValues } = zodFormatter(data.items);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="flex h-auto w-full flex-col gap-12 px-4 py-24 md:flex-row md:px-28">
      <div className="flex flex-col justify-start gap-4 md:w-1/2">
        <h2 className="text-4xl font-bold text-white md:text-6xl">
          {data.heading}
        </h2>
        <p className="inline w-10/12 text-left text-lg text-white md:text-xl">
          {data.text}
        </p>
      </div>
      <div className="md:w-1/2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {data.items.map((item: any) => (
              <FormField
                control={form.control}
                name={item.title}
                key={item._key}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input
                        className="text-white"
                        placeholder={item.placeholder || item.title}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              className="text-md mt-10 flex w-full items-center justify-center space-x-2 rounded-full border border-white px-5 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
