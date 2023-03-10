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

type Flex = Component & {
    Align: {
        START: string;
        END: string;
        CENTER: string;
        STRETCH: string;
        BASELINE: string;
    };

    Child: Component & {
        defaultProps: {
            basis: "auto";
            grow: 1;
            shrink: 1;
            wrap: false;
        };

        displayName: "FlexChild";
    };

    Direction: {
        VERTICAL: string,
        HORIZONTAL: string;
    };

    Justify: {
        START: string;
        END: string;
        CENTER: string;
        BETWEEN: string;
        AROUND: string;
    };

    Wrap: {
        NO_WRAP: string;
        WRAP: string;
        WRAP_REVERSE: string;
    };

    defaultProps: {
        shrink: 1,
        grow: 1,
        basis: "auto";
    };

    displayName: "Flex";
};

export default Flex;
