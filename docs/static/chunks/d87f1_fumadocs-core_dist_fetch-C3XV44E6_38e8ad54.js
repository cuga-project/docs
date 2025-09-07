(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/fumadocs-core@15.7.2_@types+react@19.1.12_next@15.5.0_react-dom@19.1.1_react@19.1.1__re_40e951c403ba557fb13d96f9b64e4f12/node_modules/fumadocs-core/dist/fetch-C3XV44E6.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchDocs",
    ()=>fetchDocs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$7$2e$2_$40$types$2b$react$40$19$2e$1$2e$12_next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$re_40e951c403ba557fb13d96f9b64e4f12$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$JSBRDJBE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.7.2_@types+react@19.1.12_next@15.5.0_react-dom@19.1.1_react@19.1.1__re_40e951c403ba557fb13d96f9b64e4f12/node_modules/fumadocs-core/dist/chunk-JSBRDJBE.js [app-client] (ecmascript)");
;
// src/search/client/fetch.ts
var cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, param) {
    let { api = "/api/search", locale, tag } = param;
    const url = new URL(api, window.location.origin);
    url.searchParams.set("query", query);
    if (locale) url.searchParams.set("locale", locale);
    if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
    const key = "".concat(url.pathname, "?").concat(url.searchParams);
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await fetch(key);
    if (!res.ok) throw new Error(await res.text());
    const result = await res.json();
    cache.set(key, result);
    return result;
}
;
}),
]);

//# sourceMappingURL=d87f1_fumadocs-core_dist_fetch-C3XV44E6_38e8ad54.js.map