export const metaFiles = import.meta.glob("/src/data/snippets/**/meta.json", {
  eager: true,
});
export const demoFiles = import.meta.glob("/src/data/snippets/**/Demo.tsx");
export const codeFiles = import.meta.glob("/src/data/snippets/**/code.tsx");

export async function getAllSnippets() {
  const entries = await Promise.all(
    Object.entries(metaFiles).map(async ([path, meta]: any) => {
      const slug = path.split("/").slice(-2, -1)[0];

      // Load the demo component
      const demoImportFn = demoFiles[`/src/data/snippets/${slug}/Demo.tsx`];
      const demoModule = demoImportFn ? await demoImportFn() : null;
      const Demo = demoModule?.default;

      // Load the raw code
      const codeImportFn = codeFiles[`/src/data/snippets/${slug}/code.tsx`];
      const codeModule = codeImportFn ? await codeImportFn() : null;
      const code = codeModule?.default?.toString?.() ?? "// code not found";

      return {
        ...meta,
        slug,
        Demo,
        code,
      };
    }),
  );

  return entries;
}

export async function getSnippetBySlug(slug: string) {
  const all = await getAllSnippets();
  return all.find((s) => s.slug === slug);
}
