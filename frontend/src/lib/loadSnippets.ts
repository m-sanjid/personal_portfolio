import React from "react";
import { Snippet } from "../types";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MetaModule = Record<string, any>;
type DemoModule = { default: React.ComponentType };
type CodeModule = { default: { toString(): string } };

export const metaFiles = import.meta.glob<MetaModule>(
  "/src/data/snippets/**/meta.json",
  {
    eager: true,
  },
);
export const demoFiles = import.meta.glob<DemoModule>(
  "/src/data/snippets/**/Demo.tsx",
);
export const codeFiles = import.meta.glob<CodeModule>(
  "/src/data/snippets/**/code.tsx",
);

export async function getAllSnippets(): Promise<Snippet[]> {
  const entries = await Promise.all(
    Object.entries(metaFiles).map(async ([path, meta]) => {
      const slug = path.split("/").slice(-2, -1)[0];

      // Load the demo component
      const demoImportFn = demoFiles[`/src/data/snippets/${slug}/Demo.tsx`];
      const demoModule = demoImportFn ? await demoImportFn() : null;
      // Now TypeScript knows demoModule.default exists because of our type definition
      const Demo = demoModule?.default;

      // Load the raw code
      const codeImportFn = codeFiles[`/src/data/snippets/${slug}/code.tsx`];
      const codeModule = codeImportFn ? await codeImportFn() : null;
      const code = codeModule?.default?.toString?.() ?? "// code not found";

      // Ensure all required properties of Snippet type are present
      return {
        title: meta.title || slug,
        description: meta.description || "",
        slug,
        tags: meta.tags || [],
        code,
        Demo,
        language: meta.language,
        author: meta.author,
        createdAt: meta.createdAt,
        downloads: meta.downloads,
        likes: meta.likes,
        usage: meta.usage,
        props: meta.props,
        examples: meta.examples,
      } as Snippet;
    }),
  );

  return entries;
}

export async function getSnippetBySlug(
  slug: string,
): Promise<Snippet | undefined> {
  const all = await getAllSnippets();
  return all.find((s) => s.slug === slug);
}
