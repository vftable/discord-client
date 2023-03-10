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

type Checkbox = Component & {
    Aligns: {
        CENTER: string;
        TOP: string;
    };

    Shapes: {
        BOX: string;
        ROUND: string;
    };

    Types: {
        DEFAULT: string;
        GHOST: string;
        INVERTED: string;
        ROW: string;
    };

    defaultProps: {
        align: string; // Checkbox.Aligns.CENTER
        color: string;
        disabled: false;
        displayOnly: false;
        onChange: () => {};
        readOnly: false;
        reverse: false;
        shape: string;
        size: 24;
        type: string; // Checkbox.Types.DEFAULT;
        value: false;
    };

    displayName: "Checkbox";
};

export default Checkbox;
