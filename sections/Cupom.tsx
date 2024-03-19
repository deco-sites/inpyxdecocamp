import type { ImageWidget } from "apps/admin/widgets.ts";


export interface CupomProps {
    text: string;
    subheading: string;
    title: string;
    description: string;
    image: ImageWidget;
    alignment: "Left" | "Right";
   }
  
    const ALIGNMENT_TEXT = {
        "Left": "items-start text-start",
        "Center": "items-center text-center",
        "Right": "items-end text-end",
      };
      
 

      export default function Cupom(
        {
          text =
            "Lorem ipsum dolor sit amet consectetur. Placerat ornare diam nulla fringilla gravida justo elementum. Ut sed in.",
          subheading,
          alignment = "Left",
        }: CupomProps,
      ) {
        return (
          <section class="bg-base-100">
            <div class="xl:container xl:mx-auto mx-5 md:mx-10 py-10 md:py-24">
              <div
                class={`flex flex-col gap-6 ${ALIGNMENT_TEXT[alignment ?? "Left"]}`}
              >
                <h1 class="font-bold text-base-content text-[40px] leading-[120%]">
                  {text}
                </h1>
                {subheading && (
                  <p class="text-base-content text-[18px]">{subheading}</p>
                )}
              </div>
            </div>
          </section>
        );
      }
      