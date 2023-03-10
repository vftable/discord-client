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

import { GuildMember } from "@discord-types/general";

export default class GuildMemberStore {
    getAllGuildsAndMembers(): Record<string, Record<string, GuildMember>>;
    /** @returns Format: [guildId-userId: Timestamp (string)] */
    getCommunicationDisabledUserMap(): Record<string, string>;
    getCommunicationDisabledVersion(): number;
    getKeyedMembers(guildId: string): Record<string, GuildMember>;
    getMember(guildId: string, userId: string): GuildMember;
    getMemberIds(guildId: string): string[];
    getMembers(guildId: string): GuildMember[];
    getNick(guildId: string, userId: string): string;
    getNicknameGuildsMapping(userId: string): Record<string, string[]>;
    getNicknames(userId: string): string[];
    isMember(guildId: string, userId: string): boolean;
    memberOf(userId: string): string[];
    initialize(): void;
}
