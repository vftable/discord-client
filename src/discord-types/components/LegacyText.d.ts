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

type LegacyText = Component & {
    Colors: {
        ALWAYS_WHITE: string;
        BRAND: string;
        CUSTOM: string | undefined;
        ERROR: string;
        HEADER_PRIMARY: string;
        HEADER_SECONDARY: string;
        INTERACTIVE_ACTIVE: string;
        INTERACTIVE_NORMAL: string;
        LINK: string;
        MUTED: string;
        STANDARD: string;
        STATUS_GREEN: string;
        STATUS_RED: string;
        STATUS_YELLOW: string;
    };

    Sizes: {
        SIZE_10: string;
        SIZE_12: string;
        SIZE_14: string;
        SIZE_16: string;
        SIZE_20: string;
        SIZE_24: string;
        SIZE_32: string;
    };

    displayName: "LegacyText";
};

export default LegacyText;
