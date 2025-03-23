import { useState } from "react";
import InputBox from "./InputBox";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be atleast 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be atleast 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be atleast 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const MessageForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    setIsSubmitting(false);
    setSubmitSuccess(true);
    form.reset();

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputBox
          placeholder="Tony Stark"
          label="Name"
          {...register("name")}
          error={errors.name?.message}
        />
        <InputBox
          placeholder="ironman@gmail.com"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <InputBox
          placeholder="Details of project"
          label="Subject"
          {...register("subject")}
          error={errors.subject?.message}
        />
        <InputBox
          placeholder="Your message"
          label="Message"
          type="big"
          {...register("message")}
          error={errors.message?.message}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-slate-500 py-2 rounded-md bg-black/80 dark:bg-black text-neutral-200 backdrop-blur-sm w-full dark:border-none"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitSuccess && (
          <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-3 rounded-md text-center mt-4">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </form>
    </div>
  );
};

export default MessageForm;
