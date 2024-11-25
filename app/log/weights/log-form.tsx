"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getGlobalState, setGlobalState } from "@/lib/state";

const formSchema = z.object({
  exercise: z.string(),
  rpe: z.number().gt(0).lt(11),
  "set-1": z.number(),
  "set-2": z.number(),
  "set-3": z.number(),
});

export default function LogForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const cardioInfo = getGlobalState("weights");
    const date = new Date().toISOString().split("T")[0];

    cardioInfo.push({ datetime: date, ...values });
    setGlobalState("weights", cardioInfo);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="exercise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exercise</FormLabel>
              <FormControl>
                <Input placeholder="pushups, pullups, etc.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rpe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RPE</FormLabel>
              <FormControl>
                <Input
                  placeholder="0-10"
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        Sets
        <div className="space-y-2">
          {[1, 2, 3].map((i) => {
            return (
              <FormField
                key={i}
                control={form.control}
                // @ts-expect-error
                name={`set-${i}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="(reps)"
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
