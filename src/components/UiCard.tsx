import { CodeBlock } from "./ui/code-block";

const UiCard = () => {
  return (
    <CodeBlock
      language="jsx"
      filename="DummyComponent.jsx"
      highlightLines={[1, 3, 14, 18]}
      code={code}
    />
  );
};

export default UiCard;

const code = `<div className="glass p-6 rounded-xl">
  <h3 className="text-lg font-medium mb-2">Glass Card</h3>
  <p className="text-foreground/70">A beautiful glass-like card with backdrop blur.</p>
</div>`;
