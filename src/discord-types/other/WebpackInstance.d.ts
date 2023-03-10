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

type require = (id: number) => any;

/**
 * Webpack's \_\_webpack_require\_\_ instance.
 */
export default interface __webpack_require__ extends require {
    E: Function;
    F: { j: Function; };
    O: Function & { j: Function; };
    a: Function;
    amdD: Function;
    amdO: unknown;
    b: string;
    /**
     * This is where loaded modules are stored; and where webpack searchers do their searching.
     */
    c: {
        [id: number]: {
            id: number | string;
            loaded: boolean;
            exports: any;
        };
    };
    d: Function;
    /**
     * Loads chunks by their ID.
     */
    e: (chunkId: number) => any;
    f: {
        compat: Function;
        j: Function;
        prefetch: Function;
    };
    g: typeof globalThis & { [key: string]: any; };
    hmd: Function;
    l: Function;
    /**
     * This houses all modules that have been pushed, loaded or not.
     *
     * This can be useful for force lazy-loading classes and other modules that haven't been instantiated yet but have been pushed.
     *
     * @param ret The return value from the module will be `Object.assign`ed to this object.
     */
    m: (e: {
        exports: any,
        id: number,
        loaded: boolean;
    }, ret: object, req: __webpack_require__) => void;
    n: Function;
    nmd: Function;
    o: Function;
    p: string;
    r: Function;
    s: number;
    t: Function;
    u: Function;
    v: Function;
    // eslint-disable-next-line semi
}
