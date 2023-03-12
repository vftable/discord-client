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

import { User, UserProfile } from "@discord-types/general";
import Other from "@discord-types/other";
import Stores from "@discord-types/stores";
import { LazyComponent } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { SettingsRouter } from "@webpack/common";
import axios from "axios";

const GuildFeaturesComponent = LazyComponent(() => require("../../components/GuildFeatures").default);
const UserFlagsComponent = LazyComponent(() => require("../../components/UserFlags").default);

interface Kv {
    [key: string]: string;
}

function static_cast<T>(target: any) {
    return target as unknown as T;
}

const badgeValues = {
    DISCORD_EMPLOYEE_USER: 1 << 0,
    DISCORD_PARTNER_USER: 1 << 1,
    HYPESQUAD_EVENTS_USER: 1 << 2,
    BUG_HUNTER_LEVEL_1_USER: 1 << 3,
    BUG_HUNTER_LEVEL_2_USER: 1 << 14,
    HYPESQUAD_ONLINE_HOUSE_1_USER: 1 << 6,
    HYPESQUAD_ONLINE_HOUSE_2_USER: 1 << 7,
    HYPESQUAD_ONLINE_HOUSE_3_USER: 1 << 8,
    EARLY_SUPPORTER_USER: 1 << 9,
    SYSTEM_USER: 1 << 12,
    VERIFIED_BOT_DEVELOPER_USER: 1 << 17,
    CERTIFIED_MODERATOR_USER: 1 << 18,
    ACTIVE_DEVELOPER_USER: 1 << 22
};

export default definePlugin({
    name: "GuildFeatures",
    description: "Dunno",
    authors: [
        {
            id: 112511479806246912n,
            name: "syndicated",
        },
    ],

    patches: [
        {
            find: "Messages.COMMUNITY",
            replacement: {
                get match() {
                    return /\{section:(.{1,2})\.ID\.HEADER,\s*label:(.{1,2})\..{1,2}\.Messages\.COMMUNITY/;
                },
                replace: "...$self.makeGuildFeatureCategories($1),$&"
            }
        },
        {
            find: "Messages.ACTIVITY_SETTINGS",
            replacement: {
                get match() {
                    return /\{section:(.{1,2})\.ID\.HEADER,\s*label:(.{1,2})\..{1,2}\.Messages\.BILLING_SETTINGS\}/;
                },
                replace: "...$self.makeUserFlagCategories($1),$&"
            }
        }
    ],

    makeGuildFeatureCategories({ ID }: { ID: Record<string, unknown>; }) {
        const cats = [
            {
                section: ID.HEADER,
                label: "Staff"
            }, {
                section: "GuildFeatures",
                label: "Guild Features",
                element: () => <GuildFeaturesComponent />,
            }
        ] as Array<{
            section: unknown,
            label?: string;
            element?: React.ComponentType;
            onClick?(): void;
        }>;

        cats.push({ section: ID.DIVIDER });

        return cats;
    },

    makeUserFlagCategories({ ID }: { ID: Record<string, unknown>; }) {
        const makeOnClick = (tab: string) => () => SettingsRouter.open(tab);

        const cats = [
            {
                section: ID.HEADER,
                label: "Staff"
            }, {
                section: "UserFlags",
                label: "User Flags",
                element: () => <UserFlagsComponent />,
                onClick: makeOnClick("UserFlags")
            }
        ] as Array<{
            section: unknown,
            label?: string;
            element?: React.ComponentType;
            onClick?(): void;
        }>;

        cats.push({ section: ID.DIVIDER });

        return cats;
    },

    options: {
        KV_AUTHKEY: {
            type: OptionType.STRING,
            description: "Lanyard KV Authkey",
            restartNeeded: true
        },
        PARTNERED_GUILD: {
            type: OptionType.BOOLEAN,
            description: "PARTNERED",
            default: false,
            restartNeeded: false
        },
        VANITY_URL_GUILD: {
            type: OptionType.BOOLEAN,
            description: "VANITY_URL",
            default: false,
            restartNeeded: false
        },
        VIP_REGIONS_GUILD: {
            type: OptionType.BOOLEAN,
            description: "VIP_REGIONS",
            default: false,
            restartNeeded: false
        },
        INVITE_SPLASH_GUILD: {
            type: OptionType.BOOLEAN,
            description: "INVITE_SPLASH",
            default: false,
            restartNeeded: false
        },
        BANNER_GUILD: {
            type: OptionType.BOOLEAN,
            description: "BANNER",
            default: false,
            restartNeeded: false
        },
        ANIMATED_ICON_GUILD: {
            type: OptionType.BOOLEAN,
            description: "ANIMATED_ICON",
            default: false,
            restartNeeded: false
        },
        PREMIUM_TIER_3_OVERRIDE_GUILD: {
            type: OptionType.BOOLEAN,
            description: "PREMIUM_TIER_3_OVERRIDE",
            default: false,
            restartNeeded: false
        },
        DISCORD_EMPLOYEE_USER: {
            type: OptionType.BOOLEAN,
            description: "DISCORD_EMPLOYEE",
            default: false,
            restartNeeded: false
        },
        DISCORD_PARTNER_USER: {
            type: OptionType.BOOLEAN,
            description: "DISCORD_PARTNER",
            default: false,
            restartNeeded: false
        },
        HYPESQUAD_EVENTS_USER: {
            type: OptionType.BOOLEAN,
            description: "HYPESQUAD_EVENTS",
            default: false,
            restartNeeded: false
        },
        BUG_HUNTER_LEVEL_1_USER: {
            type: OptionType.BOOLEAN,
            description: "BUG_HUNTER_LEVEL_1",
            default: false,
            restartNeeded: false
        },
        BUG_HUNTER_LEVEL_2_USER: {
            type: OptionType.BOOLEAN,
            description: "BUG_HUNTER_LEVEL_2",
            default: false,
            restartNeeded: false
        },
        HYPESQUAD_ONLINE_HOUSE_1_USER: {
            type: OptionType.BOOLEAN,
            description: "HYPESQUAD_ONLINE_HOUSE_1",
            default: false,
            restartNeeded: false
        },
        HYPESQUAD_ONLINE_HOUSE_2_USER: {
            type: OptionType.BOOLEAN,
            description: "HYPESQUAD_ONLINE_HOUSE_2",
            default: false,
            restartNeeded: false
        },
        HYPESQUAD_ONLINE_HOUSE_3_USER: {
            type: OptionType.BOOLEAN,
            description: "HYPESQUAD_ONLINE_HOUSE_3",
            default: false,
            restartNeeded: false
        },
        EARLY_SUPPORTER_USER: {
            type: OptionType.BOOLEAN,
            description: "EARLY_SUPPORTER",
            default: false,
            restartNeeded: false
        },
        SYSTEM_USER: {
            type: OptionType.BOOLEAN,
            description: "SYSTEM",
            default: false,
            restartNeeded: false
        },
        VERIFIED_BOT_DEVELOPER_USER: {
            type: OptionType.BOOLEAN,
            description: "VERIFIED_BOT_DEVELOPER",
            default: false,
            restartNeeded: false
        },
        CERTIFIED_MODERATOR_USER: {
            type: OptionType.BOOLEAN,
            description: "CERTIFIED_MODERATOR",
            default: false,
            restartNeeded: false
        },
        ACTIVE_DEVELOPER_USER: {
            type: OptionType.BOOLEAN,
            description: "ACTIVE_DEVELOPER",
            default: false,
            restartNeeded: false
        },
    },

    getStore(storeName: string) {
        return Vencord.Webpack.wreq(363010).yh.getAll().filter(n => n.constructor.displayName === storeName)[0];
    },

    get FluxDispatcher() {
        return Vencord.Webpack.wreq(173436).Z as Other.FluxDispatcher;
    },

    get BurstReactionStore() {
        return this.getStore("BurstReactionStore") as Stores.BurstReactionStore;
    },

    get GuildStore() {
        return this.getStore("GuildStore") as Stores.GuildStore;
    },

    get UserStore() {
        return this.getStore("UserStore") as Stores.UserStore;
    },

    get UserProfileStore() {
        return this.getStore("UserProfileStore") as Stores.UserProfileStore;
    },

    get SelectedChannelStore() {
        return this.getStore("SelectedChannelStore") as Stores.SelectedChannelStore;
    },

    get SelectedGuildStore() {
        return this.getStore("SelectedGuildStore") as Stores.SelectedGuildStore;
    },

    get AvatarDecorationsStore() {
        this.FluxDispatcher.dispatch({ type: "USER_AVATAR_DECORATIONS_FETCH" });
        return this.getStore("AvatarDecorationStore") as Stores.AvatarDecorationStore;
    },

    get KVUserProfile() {
        let json: Kv = {};

        axios.get(`https://api.lanyard.rest/v1/users/${this.UserStore.getCurrentUser().id}`)
            .then(function (response) {
                return response.data as Object;
            })
            .then(function (lanyardKV) {
                // eslint-disable-next-line dot-notation
                json = lanyardKV["kv"] as Kv;
            });

        return json;
    },

    set KVUserProfile(kv: Kv) {
        let json: Kv = {};

        axios.patch(`https://api.lanyard.rest/v1/users/${this.UserStore.getCurrentUser().id}`,
            kv,
            {
                headers: {
                    Authorization: Vencord.Settings.plugins.GuildFeatures.KV_AUTHKEY
                }
            }
        )
            .then(function (response) {
                return response.data as Object;
            })
            .then(function (lanyardKV) {
                // eslint-disable-next-line dot-notation
                json = lanyardKV["kv"] as Kv;
            });

        console.log(`KV set, values are: ${json}`);
    },

    start() {
        let flagInt = 0;

        let displayName = "";
        let tempDisplayName = "";

        let themeColors = [16711772, 16425984];
        let tempThemeColors = [16711772, 16425984];

        let pronouns = "";
        let tempPronouns = "";

        const flagNames = [...Object.keys(Vencord.Settings.plugins.GuildFeatures).filter((feature: string) => {
            return (feature !== "enabled") && (feature.includes("_USER")) && (Object.values(Vencord.Settings.plugins.GuildFeatures)[Object.keys(Vencord.Settings.plugins.GuildFeatures).indexOf(feature)]);
        })];

        flagNames.forEach((flag: string) => { flagInt += badgeValues[flag]; });

        this.UserStore.getCurrentUser().premiumType = 2;
        this.UserStore.getCurrentUser().flags = flagInt;

        this.BurstReactionStore.getState().burstCredits = 999;
        this.BurstReactionStore.getState().wasReplenishedToday = true;

        const getCurrentUserDefault = this.UserStore.getCurrentUser;
        const getUserProfileDefault = this.UserProfileStore.getUserProfile;
        const getGuildDefault = this.GuildStore.getGuild;
        const getBurstReactionStateDefault = this.BurstReactionStore.getState;

        const lastSelectedGuild = this.GuildStore.getGuild(this.SelectedGuildStore.getLastSelectedGuildId());

        let lastUpdatedKV = static_cast<UserProfile>(this.KVUserProfile);

        const updateLocalKV = (ret: UserProfile) => lastUpdatedKV = ret;
        const updateKV = () => this.KVUserProfile = static_cast<Kv>(lastUpdatedKV) || static_cast<Kv>(this.UserProfileStore.getUserProfile(this.UserStore.getCurrentUser().id));

        // eslint-disable-next-line dot-notation
        const getUserKV = (userId: string) => { let json: Kv = {}; axios.get(`https://api.lanyard.rest/v1/users/${userId}`).then(function (response) { return response.data as Object; }).then(function (lanyardKV) { json = lanyardKV["kv"] as Kv; }); return json || {}; };

        [
            // user update hooking

            {
                name: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME",
                callback: (res: User) => { res.displayName && (tempDisplayName = res.displayName); }
            },
            {
                name: "USER_SETTINGS_ACCOUNT_SUBMIT",
                callback: () => { displayName = tempDisplayName; }
            },

            // user profile update hooking

            {
                name: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                callback: (res: UserProfile) => { res.themeColors && (tempThemeColors = res.themeColors); }
            },
            {
                name: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                callback: (res: UserProfile) => { res.pronouns && (tempPronouns = res.pronouns); }
            },
            {
                name: "USER_PROFILE_UPDATE_SUCCESS",
                callback: () => { themeColors = tempThemeColors; pronouns = tempPronouns; updateKV(); }
            },

            // unlimited burst reactions

            {
                name: "BURST_CREDITS_SET",
                callback: () => this.BurstReactionStore.__getLocalVars().handleSetCreditBalance({ amount: 999, wasReplenishedToday: true })
            },
        ]
            .forEach(listener => this.FluxDispatcher.subscribe(listener.name, listener.callback));

        // store function overrides

        this.UserStore.getCurrentUser = function () {
            // eslint-disable-next-line prefer-const
            let ret = getCurrentUserDefault() || {};

            ret.displayName = ret.displayName || displayName;
            ret.avatarDecoration = ret.avatarDecoration || "../../../attachments/1084150600301805710/1084150731940036668/gjSxPi1";

            ret.premiumType = 2;
            ret.flags = flagInt;

            return ret;
        };

        this.UserProfileStore.getUserProfile = function (userId) {
            // eslint-disable-next-line prefer-const
            let ret = getUserProfileDefault(userId) || {}; // eslint-disable-next-line prefer-const
            let currentUserID = getCurrentUserDefault().id; // eslint-disable-next-line prefer-const
            let isCurrentUser = userId === currentUserID;

            // eslint-disable-next-line prefer-const
            let fetchedUserKV = isCurrentUser ? lastUpdatedKV : static_cast<UserProfile>(getUserKV(userId));

            ret.themeColors = ret.themeColors || fetchedUserKV.themeColors || (isCurrentUser ? themeColors : undefined);
            ret.pronouns = ret.pronouns || fetchedUserKV.pronouns || (isCurrentUser ? pronouns : undefined);
            ret.banner = ret.banner || fetchedUserKV.banner || (isCurrentUser ? "../../../attachments/1075113930915065857/1082936255836332062/OsSAdk9" : undefined);

            ret.premiumSince = ret.premiumSince || fetchedUserKV.premiumSince || (isCurrentUser ? new Date() : undefined);
            ret.premiumGuildSince = ret.premiumGuildSince || fetchedUserKV.premiumGuildSince || (isCurrentUser ? new Date() : undefined);

            ret.premiumType = 2;

            if (isCurrentUser) {
                updateLocalKV(ret);
            }

            return ret;
        };

        this.GuildStore.getGuild = function (guildId) {
            // eslint-disable-next-line prefer-const
            let ret = getGuildDefault(guildId) || lastSelectedGuild;

            // eslint-disable-next-line prefer-const
            let features: string[] = [];

            const originalFeatures = [...Object.keys(Vencord.Settings.plugins.GuildFeatures).filter((feature: string) => {
                return (feature !== "enabled") && (feature.includes("_GUILD")) && (Object.values(Vencord.Settings.plugins.GuildFeatures)[Object.keys(Vencord.Settings.plugins.GuildFeatures).indexOf(feature)]);
            })];

            originalFeatures.forEach((feature: string) => { // eslint-disable-next-line prefer-const
                let newFeature = feature.replace("_GUILD", "");
                features.push(newFeature);
            }); // @ts-ignore

            ret.features = new Set([...ret.features, ...features]);

            if (Vencord.Settings.plugins.GuildFeatures.PREMIUM_TIER_3_OVERRIDE_GUILD) {
                ret.premiumTier = 3;
                ret.premiumSubscriberCount = 14;
                ret.premiumProgressBarEnabled = true;
            }

            return ret;
        };

        this.BurstReactionStore.getState = function () {
            // eslint-disable-next-line prefer-const
            let ret = getBurstReactionStateDefault() || {};

            ret.burstCredits = 999;
            ret.wasReplenishedToday = true;

            return ret;
        };

        // end store function overrides

        updateKV();
    },
    stop() { },
});
