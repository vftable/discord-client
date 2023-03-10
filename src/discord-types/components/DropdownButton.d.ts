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

import { Component } from ".";

type DropdownButton = Component & {
    Colors: {
        BLACK: string;
        BRAND: string;
        BRAND_NEW: string;
        GREEN: string;
        LINK: string;
        PRIMARY: string;
        RED: string;
        TRANSPARENT: string;
        WHITE: string;
        YELLOW: string;
    };

    DropdownSizes: {
        LARGE: string;
        MEDIUM: string;
        SMALL: string;
    };

    Looks: {
        BLANK: string;
        FILLED: string;
        INVERTED: string;
        LINK: string;
        OUTLINED: string;
    };

    Sizes: {
        ICON: string;
        LARGE: string;
        MAX: string;
        MEDIUM: string;
        MIN: string;
        NONE: string;
        SMALL: string;
        TINY: string;
        XLARGE: string;
    };

    displayName: "DropdownButton";
};

export default DropdownButton;
