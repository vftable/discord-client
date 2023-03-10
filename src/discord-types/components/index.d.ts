/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export { default as Card } from "./Card";
export { default as Caret } from "./Caret";
export { default as Checkbox } from "./Checkbox";
export { default as Clickable } from "./Clickable";
export { default as DropdownButton } from "./DropdownButton";
export { default as Flex } from "./Flex";
export { default as FormItem } from "./FormItem";
export { default as FormNotice } from "./FormNotice";
export { default as FormText } from "./FormText";
export { default as FormTitle } from "./FormTitle";
export { default as HeaderBar } from "./HeaderBar";
export { default as LegacyText } from "./LegacyText";
export { default as Markdown } from "./Markdown";
export { default as Menu } from "./Menu";
export { default as Modal } from "./Modal";
export { default as Notice } from "./Notice";
export { default as Popout } from "./Popout";
export { default as RadioGroup } from "./RadioGroup";
export { default as Scrollers } from "./Scrollers";
export { default as SearchBar } from "./SearchBar";
export { default as SelectTempWrapper } from "./SelectTempWrapper";
export { default as Slider } from "./Slider";
export { default as Spinner } from "./Spinner";
export { default as TabBar } from "./TabBar";
export { default as TextInput } from "./TextInput";
export { default as Tooltip } from "./Tooltip";

export type Component<T extends string | void = void> = (props: any) => T extends string
    ? JSX.Element & { displayName: T; }
    : JSX.Element;
