import toc from "./toc.json" assert { type: "json" };
import {
  extract,
  type Extract,
} from "https://deno.land/std@0.191.0/front_matter/any.ts";

export interface Page extends Extract {
  title: string;
}

export interface Toc {
  [key: string]: {
    title?: string;
    pages?: Toc;
  };
}

function getToc(src: string): { path: string; title: string } {
  let tocTmp: Toc = toc;
  let path: string[] = [];
  let title = "";
  let depth = 0;
  src.split("/").forEach((item: string, _index) => {
    const toc = tocTmp[item];

    if (toc?.title) {
      title ||= toc.title;
    }

    path.push(item);
    if (toc?.pages) {
      tocTmp = toc.pages;
    }
    depth++;
  });

  return {
    path: `${path.join("/")}${depth == 1 ? "/index" : ""}.md`,
    title,
  };
}

export async function getPage(slag: string): Promise<Page> {
  const { path, title } = getToc(slag);
  const fileText = await fetch(new URL(path, import.meta.url).toString());
  const text = await fileText.text();
  const page = { ...extract(text), title };

  return page;
}

export async function getTocStructure(): Promise<Toc> {
    return toc
}