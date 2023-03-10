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

import Constants from "@discord-types/other/Constants";

import Role from "./Role";
import User from "./User";

export default class Guild {
    constructor(guild: object);
    afkChannelId: string | undefined;
    afkTimeout: number;
    applicationCommandCounts: {
        0: number;
        1: number;
        2: number;
    };
    application_id: unknown;
    banner: string | undefined;
    defaultMessageNotifications: number;
    description: string | undefined;
    discoverySplash: string | undefined;
    explicitContentFilter: number;
    features: Set<keyof Constants["GuildFeatures"]>;
    hubType: unknown;
    icon: string | undefined;
    id: string;
    joinedAt: Date;
    maxMembers: number;
    maxVideoChannelUsers: number;
    mfaLevel: number;
    name: string;
    nsfwLevel: number;
    ownerId: string;
    preferredLocale: string;
    premiumProgressBarEnabled: boolean;
    premiumSubscriberCount: number;
    premiumTier: number;
    publicUpdatesChannelId: string | undefined;
    roles: Record<string, Role>;
    rulesChannelId: string | undefined;
    splash: string | undefined;
    systemChannelFlags: number;
    systemChannelId: string | undefined;
    vanityURLCode: string | undefined;
    verificationLevel: number;

    get acronym(): string;

    getApplicationId(): unknown;
    getIconSource(size: string | number, canAnimate: boolean): { uri: string; };
    getIconURL(size: string | number, canAnimate: boolean): string;
    getMaxEmojiSlots(): number;
    getRole(roleId: string): Role;
    hasFeature(feature: keyof Constants["GuildFeatures"]): boolean;
    hasVerificationGate(): boolean;
    isLurker(): boolean;
    isNew(newerThanDays?: number): boolean;
    isOwner(user: User): boolean;
    isOwnerWithRequiredMfaLevel(user: User): boolean;
    toString(): string; // override that is identical to Guild.name
}
