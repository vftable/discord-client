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

export default class Channel {
    constructor(channel: object);
    application_id: number | undefined;
    bitrate: number;
    defaultAutoArchiveDuration: number | undefined;
    flags: number;
    guild_id: string;
    icon: string;
    id: string;
    lastMessageId: string;
    lastPinTimestamp: string | undefined;
    member: unknown;
    memberCount: number | undefined;
    memberIdsPreview: string[] | undefined;
    memberListId: unknown;
    messageCount: number | undefined;
    name: string;
    nicks: Record<string, unknown>;
    nsfw: boolean;
    originChannelId: unknown;
    ownerId: string;
    parent_id: string;
    permissionOverwrites: {
        [role: string]: {
            id: string;
            type: number;
            deny: bigint;
            allow: bigint;
        };
    };
    position: number;
    rateLimitPerUser: number;
    rawRecipients: {
        id: string;
        avatar: string;
        username: string;
        public_flags: number;
        discriminator: string;
    }[];
    recipients: string[];
    rtcRegion: string;
    threadMetadata: {
        locked: boolean;
        archived: boolean;
        invitable: boolean;
        createTimestamp: string | undefined;
        autoArchiveDuration: number;
        archiveTimestamp: string | undefined;
    };
    topic: string;
    type: number;
    userLimit: number;
    videoQualityMode: undefined;

    get accessPermissions(): bigint;
    get lastActiveTimestamp(): number;

    computeLurkerPermissionsAllowList(): unknown;
    getApplicationId(): unknown;
    getGuildId(): string;
    getRecipientId(): unknown;
    hasFlag(flag: number): boolean;
    isActiveThread(): boolean;
    isArchivedThread(): boolean;
    isCategory(): boolean;
    isDM(): boolean;
    isDirectory(): boolean;
    isForumChannel(): boolean;
    isGroupDM(): boolean;
    isGuildStageVoice(): boolean;
    isGuildVoice(): boolean;
    isListenModeCapable(): boolean;
    isManaged(): boolean;
    isMultiUserDM(): boolean;
    isNSFW(): boolean;
    isOwner(): boolean;
    isPrivate(): boolean;
    isSystemDM(): boolean;
    isThread(): boolean;
    isVocal(): boolean;
}
