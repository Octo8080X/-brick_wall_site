import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps, Context } from "$fresh/server.ts";
import Fotter from "../components/Fotter.tsx";
import Header from "../components/Header.tsx";
import {getPage, getTocStructure, Toc, type Page} from '../pages/pages.ts'
import * as gfm from "https://deno.land/x/gfm@0.2.1/mod.ts";

import {Marked} from "https://deno.land/x/markdown_moon@0.0.2/mod.ts"
import ModalMounter from "../islands/ModalMounter.tsx";


function Link(props:{toc: Toc, parentKey: string}){
  return (
    <ol class="list-disc list-inside ml-2">
      {Object.keys(props.toc).map((item) => {
        return (<li><a href={`/${props.parentKey}/${item}`}>{props.toc[item].title}</a></li>)})
      }
    </ol>
  )
}



function SideBar(toc: Toc){
  return (
    <div class="hidden md:block w-80 p-2 border-r-1 whitespace-nowrap">
      <nav>
        <ol class="list-decimal list-inside">
          { Object.keys(toc.toc).map((item) => {
              return (
                <li class="mb-2">
                  <a href={`/${item}`}>{item}</a>
                  {toc.toc[item].pages && <Link toc={toc.toc[item].pages} parentKey={item}/>}
                </li>
              )
            })
          }
        </ol>
      </nav>
    </div>
  )
}

export const handler: Handlers<Page> = {
  async GET(_req: Request, ctx: Context) {
    let slug = ctx.params.slug;

    if (!slug.match(/^(docs|modules)/)) {
      return ctx.renderNotFound();
    }

    if(slug.match(/^docs$/)){
      slug += "/introduction"
    }

    const getPageResult = await getPage(slug)
    const toc = await getTocStructure()
    const resp = ctx.render({ page: getPageResult, toc: toc });

    return resp;
  },
};

export default await function SlagPage(props: PageProps<Page & {toc: Toc}>) {
  return (
    <div class="max-w-screen-lg flex flex-col gap-3">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css" integrity="sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-twilight.min.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-bash.js"></script>

      </Head>
      <ModalMounter class="md:hidden" />
      <div class="flex flex-row gap-3">
        <SideBar toc={props.data.toc} />
        <div class="min-w-0 w-full markdown-body p-4" dangerouslySetInnerHTML={{ __html: Marked.parse(props.data.page.body).content} }>
        </div>
      </div>
    </div>
  );
}
