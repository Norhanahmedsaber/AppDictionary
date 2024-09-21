import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const fonts = [
  { id: 1, name: "Sans" ,value: 'openSans' },
  { id: 2, name: "Mono",value:'monoSpace' },
  { id: 3, name: "Sans serif",value:"ptSerif" },
];

export default function Example({isDarkMode, selectedFont,setSelectedFont}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(fonts[1]);

  const handleFontChange = (font) => {
    setSelected(font); 
    setSelectedFont(font.value); 
  };

  const filteredfonts =
    query === ""
      ? fonts
      : fonts.filter((font) => {
          return font.name.toLowerCase().includes(query.toLowerCase());
        }); 

  return (
    <div className="felx justify-center items-center content-center p-0">
      <Combobox
        value={selected}
        onChange={handleFontChange}
        onClose={() => setQuery("")}
      >
        <div className="relative w-fit">
          <ComboboxInput
          className={clsx(
            `rounded-lg bg-transparent  mr-8 text-sm w-24  ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}`, // Adjusted bg color for dark mode
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
          )}
          displayValue={(font) => font?.name}
          onChange={(event) => setQuery(event.target.value)}
/>          
          <ComboboxButton className="pl-0  pr-0 absolute inset-y-0  right-0 ">
            <ChevronDownIcon className=" size-5 fill-[#9c27b0] group-data-[hover]:fill-gray-400" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            ` rounded-xl border flex flex-col justify-start border-gray-400 pr-8  empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0  ${isDarkMode ? 'dark:text-white' : 'text-black'}`
          )}
        >
          {filteredfonts.map((font) => (
            <ComboboxOption
              key={font.id}
              value={font}
              className="group flex cursor-default items-start gap-2 rounded-lg  select-none "
            >
              <CheckIcon className="invisible size-4 fill-white  group-data-[selected]:visible" />
              <div className="text-sm/6 text-gray-600 ">{font.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>

      </Combobox>
    </div>
  );
}
