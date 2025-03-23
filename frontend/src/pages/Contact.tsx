import ContactCard from "@/components/ContactCard";
import MessageForm from "@/components/MessageForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-4xl mx-auto w-full bg-black/10 backdrop-blur-sm p-4 rounded-md dark:bg-white/10"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In Touch
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-4">
        Have a project in mind or want to discuss a potential collaboration? I'd
        love to hear from you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-4 items-center">
        <div>
          <MessageForm />
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
