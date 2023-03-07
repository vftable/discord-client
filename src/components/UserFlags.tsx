/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import "./VencordSettings/settingsStyles.css";

import { Settings } from "@api/settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { handleComponentFailed } from "@components/handleComponentFailed";
import { Margins } from "@utils/margins";
import { findByCodeLazy } from "@webpack";
import { Forms, React, Switch, Text } from "@webpack/common";

const cl = classNameFactory("vc-settings-");
const TabBar = findByCodeLazy('[role="tab"][aria-disabled="false"]');

const BadgeFlags: Array<false | {
    key: string;
    title: string;
}> =
    [
        {
            key: "DISCORD_EMPLOYEE_USER",
            title: "Discord Employee",
        },
        {
            key: "DISCORD_PARTNER_USER",
            title: "Discord Partner"
        },
        {
            key: "HYPESQUAD_EVENTS_USER",
            title: "Hypesquad Events"
        },
        {
            key: "BUG_HUNTER_LEVEL_1_USER",
            title: "Bug Hunter (level 1)"
        },
        {
            key: "BUG_HUNTER_LEVEL_2_USER",
            title: "Bug Hunter (level 2)"
        },
        {
            key: "HYPESQUAD_ONLINE_HOUSE_1_USER",
            title: "Hypesquad Bravery"
        },
        {
            key: "HYPESQUAD_ONLINE_HOUSE_2_USER",
            title: "Hypesquad Brilliance"
        },
        {
            key: "HYPESQUAD_ONLINE_HOUSE_3_USER",
            title: "Hypesquad Balance"
        },
        {
            key: "EARLY_SUPPORTER_USER",
            title: "Early Supporter"
        },
        {
            key: "SYSTEM_USER",
            title: "System"
        },
        {
            key: "VERIFIED_BOT_DEVELOPER_USER",
            title: "Verified Bot Developer"
        },
        {
            key: "CERTIFIED_MODERATOR_USER",
            title: "Discord Moderator Alumni (Certified Moderator)"
        },
        {
            key: "ACTIVE_DEVELOPER_USER",
            title: "Active Developer"
        },
    ];

interface SettingsProps {
    tab: string;
}

interface SettingsTab {
    name: string;
    component?: React.ComponentType;
}

const SettingsTabs: Record<string, SettingsTab> = {
    BadgeFlags: {
        name: "Badges",
        component: () => (
            <>
                {BadgeFlags.map(s => s && (
                    <Switch
                        key={s.key}
                        value={Settings.plugins.GuildFeatures[s.key]} // @ts-ignore
                        onChange={v => { Settings.plugins.GuildFeatures[s.key] = v; }}
                        note={null}
                    >
                        {s.title}
                    </Switch>
                ))}
            </>
        )
    },
};

function UserFlags() {
    // eslint-disable-next-line prefer-const
    let [currentTabName, setCurrentTabName] = React.useState("BadgeFlags");
    // eslint-disable-next-line prefer-const
    let [currentTab, setCurrentTab] = React.useState(ErrorBoundary.wrap(SettingsTabs[currentTabName]?.component as React.ComponentType<{}>) as unknown as React.ReactElement);
    // eslint-disable-next-line prefer-const
    let CurrentTab: React.ComponentType<{}> = () => currentTab;

    return <Forms.FormSection>
        <Text variant="heading-md/normal" tag="h2">User Flags</Text>

        <TabBar
            type="top"
            look="brand"
            className={cl("tab-bar")}
            selectedItem={currentTabName}
            onItemSelect={(selectedTab: string) => { setCurrentTabName(selectedTab); setCurrentTab(ErrorBoundary.wrap(SettingsTabs[currentTabName]?.component as React.ComponentType<{}>) as unknown as React.ReactElement); }}
        >
            {Object.entries(SettingsTabs).map(([key, { name, component }]) => {
                if (!component) return null;
                return <TabBar.Item
                    id={key}
                    className={cl("tab-bar-item")}
                    key={key}>
                    {name}
                </TabBar.Item>;
            })}
        </TabBar>

        <Forms.FormDivider />

        <Forms.FormSection className={Margins.top32}>
            {CurrentTab && <CurrentTab />}
        </Forms.FormSection>

    </Forms.FormSection >;
}

export default function () {
    return <ErrorBoundary onError={handleComponentFailed}>
        <UserFlags />
    </ErrorBoundary>;
}
