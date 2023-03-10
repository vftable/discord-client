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

import { Channel } from "@discord-types/general";

export default class ChannelStore {
    getAllThreadsForParent(channelId: string): Channel[];
    getChannel(channelId: string): Channel;
    getDMFromUserId(userId: string): string;
    getDMUserIds(): string[];
    getGuildChannelsVersion(guildId: string): number;
    getInitialOverlayState(): Record<string, Channel>;
    getMutableGuildAndPrivateChannels(): Record<string, Channel>;
    getMutableGuildChannels(): Record<string, Channel>;
    getMutableGuildChannelsByGuild(): Record<string, Record<string, Channel>>;
    getMutablePrivateChannels(): Record<string, Channel>;
    getPrivateChannelsVersion(): number;
    getSortedPrivateChannels(): Channel[];
    hasChannel(channelId: string): boolean;
    initialize(): void;
}
