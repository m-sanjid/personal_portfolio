import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";
import z from "zod";
import InputBox from "./InputBox";
import { AnimatedButton } from "./AnimatedButton";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const MessageForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = form;

  // Clear notifications after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitSuccess || submitError) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitSuccess, submitError]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    
    try {
      const response = await fetch(`${BACKEND_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      setSubmitError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <motion.form 
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-5 backdrop-blur-sm p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <InputBox
            placeholder="Tony Stark"
            label="Name"
            {...register("name")}
            error={errors.name?.message}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <InputBox
            placeholder="ironman@gmail.com"
            label="Email"
            inputType="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <InputBox
            placeholder="Details of project"
            label="Subject"
            {...register("subject")}
            error={errors.subject?.message}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <InputBox
            placeholder="Your message"
            label="Message"
            type="big"
            {...register("message")}
            error={errors.message?.message}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative"
        >
          <AnimatedButton 
            disabled={isSubmitting || (!isDirty && !isValid)} 
            type="submit"
            className="w-full bg-primary text-secondary rounded-lg" 
            label={`${isSubmitting ? "Sending..." : "Send Message"}`} 
            logo={isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />  } />
        </motion.div>

        {/* Success and error messages */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "40px", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-10 flex items-center gap-3 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 rounded-lg"
            >
              <div className="p-1 bg-green-200 dark:bg-green-800/50 rounded-full">
                <Check size={16} className="text-green-700 dark:text-green-200" />
              </div>
              <p>Thank you! Your message has been sent successfully.</p>
            </motion.div>
          )}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "40px", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute -bottom-4 flex items-center gap-3 bg-red-100/80 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-3 rounded-lg"
            >
              <div className="p-1 bg-red-200 dark:bg-red-800/50 rounded-full">
                <AlertCircle size={16} className="text-red-700 dark:text-red-200" />
              </div>
              <p>{submitError}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default MessageForm;
