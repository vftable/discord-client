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

export default interface GuildMember {
    avatar: string | undefined;
    banner: string | undefined;
    bio: string;
    colorString: string;
    communicationDisabledUntil: string | undefined;
    fullProfileLoadedTimestamp: number;
    guildId: string;
    hoistRoleId: string;
    iconRoleId: string;
    isPending: boolean | undefined;
    joinedAt: string | undefined;
    nick: string | undefined;
    premiumSince: string | undefined;
    roles: string[];
    userId: string;
    // eslint-disable-next-line semi
}
