import { JSX } from "preact";
import { useState } from "preact/hooks";
import Modal from "../components/Modal.tsx";

export default function ModalMounter(
  props: JSX.HTMLAttributes<HTMLElement>,
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        class={`w-32 p-1 bg-white rounded border(gray-500 2) hover:bg-gray-200 disabled:(opacity-50 cursor-not-allowed) ${
            props.class?.split(" ").filter((p) => !p.match(/^[h,w]-/)).join(" ")
          }`}
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isNoBackdropClose={false}
        class="p-2 border-2 border-gray-200 rounded top-[100vh] "
      >
        <div class="flex flex-col">
          <div class="mb-4">
            <div class="flex">
              <div class="flex-grow">
                <h2 class="text-2xl">Fresh</h2>
              </div>
              <div class="flex-none">
                <button
                  class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 disabled:(opacity-50 cursor-not-allowed)"
                  onClick={() => {setIsOpen(false);}}
                >
                  close
                </button>
              </div>
            </div>

            <p>1. Just-in-time rendering on the edge.</p>
            <p>2. Island based client hydration for maximum interactivity.</p>
            <p>
              3. Zero runtime overhead: no JS is shipped to the client by
              default.
            </p>
            <p>4. No build step.</p>
            <p>5. No configuration necessary.</p>
            <p>6. TypeScript support out of the box.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}