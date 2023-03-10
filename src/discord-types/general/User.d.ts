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

export default class User {
    constructor(user: object);
    accentColor: number;
    avatar: string;
    banner: string;
    bio: string;
    bot: boolean;
    desktop: boolean;
    discriminator: string;
    displayName: string | undefined;
    email: string | undefined;
    flags: number;
    guildMemberAvatars: Record<string, string>;
    id: string;
    mfaEnabled: boolean;
    mobile: boolean;
    nsfwAllowed: boolean | undefined;
    phone: string | undefined;
    premiumType: number | undefined;
    premiumUsageFlags: number;
    publicFlags: number;
    purchasedFlags: number;
    system: boolean;
    username: string;
    verified: boolean;

    get createdAt(): Date;
    get hasPremiumPerks(): boolean;
    get tag(): string;
    get usernameNormalized(): string;

    addGuildAvatarHash(guildId: string, avatarHash: string): User;
    getAvatarSource(guildId: string, canAnimate?: boolean): { uri: string; };
    getAvatarURL(guildId?: string, t?: unknown, canAnimate?: boolean): string;
    hasAvatarForGuild(guildId: string): boolean;
    hasDisabledPremium(): boolean;
    hasFlag(flag: number): boolean;
    hasFreePremium(): boolean;
    hasHadSKU(e: unknown): boolean;
    hasPremiumUsageFlag(flag: number): boolean;
    hasPurchasedFlag(flag: number): boolean;
    hasUrgentMessages(): boolean;
    isClaimed(): boolean;
    isLocalBot(): boolean;
    isNonUserBot(): boolean;
    isPhoneVerified(): boolean;
    isStaff(): boolean;
    isSystemUser(): boolean;
    isVerifiedBot(): boolean;
    removeGuildAvatarHash(guildId: string): User;
    toString(): string;
}

export interface UserJSON {
    avatar: string;
    avatarDecoration: unknown | undefined;
    discriminator: string;
    id: string;
    publicFlags: number;
    username: string;
}
