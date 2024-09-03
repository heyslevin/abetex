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
import _ from "lodash";
import { z } from "zod";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

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

//To do:
// Create a static working form
// --- Fix formSchema for static form
// Check console log working
// Check resend working
// Create a dynamic form

export default function FormMaker({ data }) {
  // formSchema generator for form generator
  const { formSchema, defaultValues } = zodFormatter(data.items);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (formValues: any) => {
    console.log({ sending: formValues });
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formValues,
        }),
      });

      // Handle success
      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "We’ve received your message and will be in touch shortly.",
        });
        // Clean up form
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh!",
          description: "Something went wrong!",
        });
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Something went wrong!",
      });
    }
  };

  return (
    <div
      id={_.kebabCase(data.title)}
      className="flex h-auto w-full scroll-mt-10 flex-col gap-12 px-4 py-24 md:flex-row md:px-28"
    >
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
                name={_.camelCase(item.title)}
                key={item._key}
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>{item.title}</FormLabel>

                    <FormControl>
                      <Input
                        className="text-white"
                        placeholder={
                          item.placeholder ||
                          `Enter your ${_.lowerCase(item.title)}`
                        }
                        {...field}
                        value={field.value ?? ""}
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
        <Toaster />
      </div>
    </div>
  );
}
