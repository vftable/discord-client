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

const PartneredFeatures: Array<false | {
    key: string;
    title: string;
}> =
    [
        {
            key: "PARTNERED_GUILD",
            title: "Partnered",
        },
        {
            key: "VANITY_URL_GUILD",
            title: "Vanity URL"
        },
        {
            key: "VIP_REGIONS_GUILD",
            title: "VIP Regions"
        },
        {
            key: "INVITE_SPLASH_GUILD",
            title: "Invite Splash Screen"
        },
        {
            key: "BANNER_GUILD",
            title: "Banner"
        },
        {
            key: "ANIMATED_ICON_GUILD",
            title: "Animated Icon"
        }
    ];

const BoostingFeatures: Array<false | {
    key: string;
    title: string;
}> =
    [
        {
            key: "PREMIUM_TIER_3_OVERRIDE_GUILD",
            title: "Premium Tier 3 Override",
        }
    ];

interface SettingsProps {
    tab: string;
}

interface SettingsTab {
    name: string;
    component?: React.ComponentType;
}

const SettingsTabs: Record<string, SettingsTab> = {
    PartneredFeatures: {
        name: "Partnered",
        component: () => (
            <>
                {PartneredFeatures.map(s => s && (
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
    BoostingFeatures: {
        name: "Boosting",
        component: () => (
            <>
                {BoostingFeatures.map(s => s && (
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

function GuildFeatures() {
    // eslint-disable-next-line prefer-const
    let [currentTabName, setCurrentTabName] = React.useState("PartneredFeatures");
    // eslint-disable-next-line prefer-const
    let [currentTab, setCurrentTab] = React.useState(ErrorBoundary.wrap(SettingsTabs[currentTabName]?.component as React.ComponentType<{}>) as unknown as React.ReactElement);
    // eslint-disable-next-line prefer-const
    let CurrentTab: React.ComponentType<{}> = () => currentTab;

    return <Forms.FormSection>
        <Text variant="heading-md/normal" tag="h2">Guild Features</Text>

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
        <GuildFeatures />
    </ErrorBoundary>;
}
