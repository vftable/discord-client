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

interface DispatchEvent {
    type: string;
    [key: string]: any;
}

export default class FluxDispatcher {
    /**
   * I have no fucking idea what this does.
   */
    addDependencies(e: unknown, t: unknown): void;

    /**
   * Adds a dispatch call to the dispatch queue.
   *
   * This is usually more favorable to us as it avoids errors caused by two dispatch events firing at the same time.
   */
    dirtyDispatch(event: DispatchEvent): void;

    /**
   * Dispatches an event synchronously.
   *
   * This will error if another dispatch event is already in progress.
   */
    dispatch(event: DispatchEvent): void;

    /**
   * If something is already dispatching this will do nothing.
   *
   * Otherwise it will dispatch synchronously.
   */
    maybeDispatch(event: DispatchEvent): void;

    isDispatching(): boolean;

    /**
   * I assume this registers a dispatch event listener but I'm not too sure.
   *
   * @returns The callback token.
   */
    register(name: string, actionHandler: Function, storeDidChange: unknown): string;

    setInterceptor(interceptor: Function): void;

    /**
   * Subscribes to a dispatch event.
   */
    subscribe(name: string, actionHandler: Function): void;

    /**
   * Unsubscribes from a dispatch event using the same exact arguments as the subscribe function.
   */
    unsubscribe(name: string, actionHandler: Function): void;

    /**
   * Sort of like {@link dirtyDispatch} but it doesn't dispatch anything.
   *
   * It runs the function with no arguments and you can use it to essentially log when nothing is being dispatched.
   *
   * Like a "run this when dispatcher stops dispatching" function.
   */
    wait(callback: () => any): void;
}
