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

interface BurstReactionUpdateSchema {
    amount: number;
    wasReplenishedToday: boolean;
}

interface BurstReactionLocalVars {
    handleSetCreditBalance(updateRequest: BurstReactionUpdateSchema): void;
    handleFetchFromAPI(): void;
}

interface BurstReactionState {
    burstCredits: number;
    wasReplenishedToday: boolean;
}

export default class BurstReactionStore {
    __getLocalVars(): BurstReactionLocalVars;
    getState(): BurstReactionState;

    hasAvailableBurstCurrency: boolean;
    remainingBurstCurrency: number;
    wasReplenishedToday: boolean;
}
