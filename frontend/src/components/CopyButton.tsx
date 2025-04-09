import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { useState } from "react";


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
      {copied ? <IconCheck size={16} /> : <IconClipboard size={16} />}
    </button>
  );
}
