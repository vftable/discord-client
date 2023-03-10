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

type Popout = Component & {
    Align: {
        BOTTOM: string;
        CENTER: string;
        LEFT: string;
        RIGHT: string;
        TOP: string;
    };

    Animation: {
        NONE: string;
        TRANSLATE: string;
        SCALE: string;
        FADE: string;
    };

    Positions: {
        TOP: string;
        LEFT: string;
        RIGHT: string;
        BOTTOM: string;
        CENTER: string;
    };

    defaultProps: {
        animation: string; // Popout.Animation.TRANSLATE
        autoInvert: true;
        nudgeAlignIntoViewport: true;
        position: string; // Popout.Positions.RIGHT
        positionKey: undefined;
        spacing: 8;
    };

    displayName: "Popout";
};

export default Popout;
