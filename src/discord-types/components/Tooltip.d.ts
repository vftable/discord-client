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

type Tooltip = Component & {
    Colors: {
        BLACK: string;
        BRAND: string;
        CUSTOM: string;
        GREEN: string;
        GREY: string;
        PRIMARY: string;
        RED: string;
        YELLOW: string;
    };

    Positions: {
        BOTTOM: string;
        CENTER: string;
        LEFT: string;
        RIGHT: string;
        TOP: string;
    };

    defaultProps: {
        allowOverflow: false;
        color: string; // Tooltip.Colors.PRIMARY
        disableTooltipPointerEvents: true;
        forceOpen: false;
        hideOnClick: true;
        position: string; // Tooltip.Positions.TOP
        shouldShow: true;
        spacing: number;
    };

    displayName: "Tooltip";
};

export default Tooltip;
