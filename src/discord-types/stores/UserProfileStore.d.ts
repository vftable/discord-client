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

import { Guild, User, UserProfile } from "@discord-types/general";

interface MutualFriend {
    key: string;
    status: string;
    user: User;
}

interface MutualGuild {
    guild: Guild;
    nick: string | undefined;
}

export default class UserProfileStore {
    getGuildMemberProfile(userId: string, guildId: string): UserProfile;
    getIsAccessibilityTooltipViewed(): boolean;
    getMutualFriends(userId: string): Array<MutualFriend>;
    getMutualFriendsCount(userId: string): number;
    getMutualGuilds(userId: string): Array<MutualGuild>;
    getUserProfile(userId: string): UserProfile;
    getUserProfileThemeExperimentBucket(userId: string): number;
    initialize(): void;
    isFetchingFriends(userId: string): boolean;
    isFetchingProfile(userId: string): boolean;
}
