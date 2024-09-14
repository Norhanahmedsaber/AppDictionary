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

const people = [
  { id: 1, name: "Sans" },
  { id: 2, name: "Mono" },
  { id: 3, name: "Sans serif" },
];

export default function Example() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="felx justify-center items-center content-center p-0">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative w-fit">
          <ComboboxInput
            className={clsx(
              "rounded-lg pr-0 bg-white text-sm text-gray-600 w-20",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(person) => person?.name}
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
            "rounded-xl border flex flex-col justify-start border-gray-600 pr-4  empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0  "
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-start gap-2 rounded-lg  select-none "
            >
              <CheckIcon className="invisible size-4 fill-white  group-data-[selected]:visible" />
              <div className="text-sm/6 text-gray-600 ">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>

      </Combobox>
    </div>
  );
}
