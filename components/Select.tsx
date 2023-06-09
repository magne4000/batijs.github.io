import { For, type JSX, splitProps } from "solid-js";

export function Select(
  props: JSX.OptionHTMLAttributes<HTMLSelectElement> & {
    options: JSX.OptionHTMLAttributes<HTMLOptionElement>[];
  }
) {
  const [local, others] = splitProps(props, ["options", "class"]);
  return (
    <select {...others} class={"select max-w-xs " + (local.class ?? "")}>
      <For each={local.options}>
        {(option) => (
          <option
            disabled={option.disabled}
            selected={option.selected}
            value={option.value ?? ""}
          >
            {option.label}
          </option>
        )}
      </For>
    </select>
  );
}
