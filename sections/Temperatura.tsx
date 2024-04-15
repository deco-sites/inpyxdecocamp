import { ImageWidget } from "apps/admin/widgets.ts";

export interface TemperaturaProps {
  text: string;
  description: string;
  image: ImageWidget;
  alignment: "Center";
}

export interface Props {
  image?: ImageWidget;
  text: string;
  description?: string;
}

const ALIGNMENT_TEXT = {
  "Left": "items-start text-start",
  "Center": "items-center text-center",
  "Right": "items-end text-end",
};

export default function Weather(
  {
    text =
      "Lorem ipsum dolor sit amet consectetur. Placerat ornare diam nulla fringilla gravida justo elementum. Ut sed in.",
    alignment = "Center",
  }: TemperaturaProps,
) {
  return (
    <section class="bg-base-100">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 py-10 md:py-24">
        <div
          class={`flex flex-col gap-6 ${ALIGNMENT_TEXT[alignment ?? "Center"]}`}
        >
          <h1 class="font-bold text-base-content text-2xl leading-[120%]">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
  