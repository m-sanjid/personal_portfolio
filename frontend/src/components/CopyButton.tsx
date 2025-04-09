import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute cursor-pointer top-2 right-2 bg-white dark:bg-neutral-700 rounded shadow px-2 py-1"
    >
      {copied ? <Check size={16} /> : <Clipboard size={16} />}
    </button>
  );
}
