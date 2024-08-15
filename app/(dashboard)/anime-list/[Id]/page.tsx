"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Image from "next/image";
import { z } from "zod";
import { UploadButton } from "@/lib/uploadthing";
import { createList } from "@/actions/create-list";
import { CreateList } from "@/actions/create-list/schema";
import AnimeCard from "../../_components/AnimeCard";
import Header from "../../_components/Header";
import Intro from "../../_components/Intro";

const Page = () => {
  const [open, setOpen] = useState(false); // State to control the dialog visibility
  const form = useForm<z.infer<typeof CreateList>>({
    resolver: zodResolver(CreateList),
    defaultValues: {
      title: "",
      fileUrl: "",
    },
  });
  const fileUrl = form.watch("fileUrl");

  const handleCreateList = async (values: z.infer<typeof CreateList>) => {
    const res = await createList(values);
    if (res.error) {
      return toast.error(res.error);
    }
    toast.success("Anime added successfully!");
    setOpen(false); // Close the dialog after submission
  };

  return (
    <div className=" min-h-screen">
      <header className="p-4">
        <Button onClick={() => setOpen(true)}>Create Anime</Button>
      </header>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Anime</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCreateList)}
              className="space-y-4"
            >
              {!!fileUrl ? (
                <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
                  <Image
                    src={fileUrl}
                    alt="Anime preview"
                    width={400}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              ) : (
                <FormField
                  control={form.control}
                  name="fileUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="picture">Anime Image</FormLabel>
                      <FormControl>
                        <UploadButton
                          className=" bg-zinc-600"
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            form.setValue("fileUrl", res[0].url);
                            toast.success("Upload complete");
                          }}
                          onUploadError={(error: Error) => {
                            console.error(error);
                            toast.error("Upload failed");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="title">Anime Title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="title"
                        placeholder="Enter anime title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={form.formState.isSubmitting}>
                Create Anime Card
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Header />
      <Intro />

      {/* Display Anime Cards */}
      <div className="p-4">
        <AnimeCard />
        <AnimeCard />
      </div>
    </div>
  );
};

export default Page;
