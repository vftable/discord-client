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

export default interface Embed {
    author?: {
        iconProxyURL: string | undefined;
        iconURL: string | undefined;
        name: string;
        url: string;
    };
    color: string;
    fields: [];
    id: string;
    image?: {
        height: number;
        proxyURL: string;
        url: string;
        width: number;
    };
    provider?: {
        name: string;
        url: string | undefined;
    };
    rawDescription: string;
    rawTitle: string;
    referenceId: unknown;
    thumbnail?: {
        height: number;
        proxyURL: string | undefined;
        url: string;
        width: number;
    };
    type: string;
    url: string | undefined;
    video?: {
        height: number;
        proxyURL: string | undefined;
        url: string;
        width: number;
    };
    // eslint-disable-next-line semi
}

export interface EmbedJSON {
    author?: {
        icon_url: string;
        name: string;
        proxy_icon_url: string;
        url: string;
    };
    title: string;
    color: string;
    description: string;
    type: string;
    url: string | undefined;
    provider?: {
        name: string;
        url: string;
    };
    thumbnail?: {
        height: number;
        proxy_url: string | undefined;
        url: string;
        width: number;
    };
    video?: {
        height: number;
        proxy_url: string | undefined;
        url: string;
        width: number;
    };
}
