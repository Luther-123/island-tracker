module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/db-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "008e6936adc6f1e5f5d6dee81d0f4cb8d5387077c7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "40263a06fafccd7e992998ccda44c847d55a2d24c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteResident"],
    "40431c6d28b4cf0f4625604f703f5312b1b2712ba4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCollectionItem"],
    "40522145cc83e878ee984a6dc851e0faec5af1955c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteResident"],
    "40540dd11704c983e0b3a3a958dcf92ed0160b77ca",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNote"],
    "4056576776bddf9c3a882d10884e7c7fe91d2c6eeb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteGalleryPhoto"],
    "4079978194bc2bd68cb63b5c2583bbb83f46dd27ac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTask"],
    "40cebd15c48a25d109ea85a009932a407c8f03fe4f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTask"],
    "607d2aad35a0dffc9c58af8e65d6c199ff59637eae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addResident"],
    "6087408c431bfa5d9a58213aa94ef81492b1f042c9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTask"],
    "608e37cdb1eba66c89fb8ff3c0cb39548e1ba7fc01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addNote"],
    "60f20b6aa5375580d86a103e6a4057e873fcb58b5f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleCollectionStatus"],
    "7023b7524d6502ee01472c8badb3c64567ede18eec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleTask"],
    "7038be840b0f0007eb8761403d3edfc16ee7e6361f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTaskProgress"],
    "708ee5a45c87e9107e13fe5d6fffd41ee3fd97d190",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCollectionItem"],
    "7814feebaf6d7c25a0121ef755ef373637f6de6629",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addGalleryPhoto"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/auth-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/db-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/db-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/db-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$db$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/db-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40263a06fafccd7e992998ccda44c847d55a2d24c2":{"name":"deleteResident"},"40677f0fbe32c3b02e1b9b852925a11e2e866cffe5":{"name":"deleteNote"},"4079978194bc2bd68cb63b5c2583bbb83f46dd27ac":{"name":"deleteTask"},"40a4f81e71e4e96a9a4afb952f506ed24dfc13f3b9":{"name":"deleteCollection"},"607d2aad35a0dffc9c58af8e65d6c199ff59637eae":{"name":"addResident"},"6087408c431bfa5d9a58213aa94ef81492b1f042c9":{"name":"addTask"},"60972e8b374d78ad2d0608be5470a13d85a046f066":{"name":"addNote"},"60cba34593700e6aa86c47a2a3cef1e01269339c03":{"name":"toggleCollection"},"60cc06f9cb51576ea042fa9d6a9db58122f1fca406":{"name":"toggleTaskCompletion"},"60f62dc4899c9dae8e890d168cc92adc3e6a46d752":{"name":"toggleCollectionStatus"},"7023b7524d6502ee01472c8badb3c64567ede18eec":{"name":"toggleTask"},"705d3bf413c4661097b7f8f553bfb4e5db5468dc71":{"name":"toggleTaskStatus"},"70ea1a630463b884495c0d721b12d779961dabb532":{"name":"addNoteToIsland"}},"app/actions.ts",""] */ __turbopack_context__.s([
    "addNote",
    ()=>addNote,
    "addNoteToIsland",
    ()=>addNoteToIsland,
    "addResident",
    ()=>addResident,
    "addTask",
    ()=>addTask,
    "deleteCollection",
    ()=>deleteCollection,
    "deleteNote",
    ()=>deleteNote,
    "deleteResident",
    ()=>deleteResident,
    "deleteTask",
    ()=>deleteTask,
    "toggleCollection",
    ()=>toggleCollection,
    "toggleCollectionStatus",
    ()=>toggleCollectionStatus,
    "toggleTask",
    ()=>toggleTask,
    "toggleTaskCompletion",
    ()=>toggleTaskCompletion,
    "toggleTaskStatus",
    ()=>toggleTaskStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function toggleTaskCompletion(taskId, currentStatus) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    UPDATE tasks 
    SET completed = ${!currentStatus} 
    WHERE id = ${taskId}
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function toggleCollectionStatus(collectionId, currentStatus) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    UPDATE collections 
    SET collected = ${!currentStatus} 
    WHERE id = ${collectionId}
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addTask(islandId, formData) {
    const title = formData.get('title');
    const category = formData.get('category') || 'Daily';
    const target = parseInt(formData.get('target') || '1', 10);
    if (!title) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      INSERT INTO tasks (island_id, title, category, target, current) 
      VALUES (${islandId}, ${title}, ${category}, ${target}, 0)
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addResident(islandId, formData) {
    const name = formData.get('name');
    const species = formData.get('species');
    const personality = formData.get('personality');
    if (!name) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    INSERT INTO residents (island_id, name, species, personality) 
    VALUES (${islandId}, ${name}, ${species}, ${personality})
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteResident(residentId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      DELETE FROM residents 
      WHERE id = ${residentId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addNote(islandId, formData) {
    const title = formData.get('title');
    const content = formData.get('content');
    if (!title) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      INSERT INTO notes (island_id, title, content) 
      VALUES (${islandId}, ${title}, ${content})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteNote(noteId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      DELETE FROM notes 
      WHERE id = ${noteId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteTask(taskId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      DELETE FROM tasks 
      WHERE id = ${taskId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function toggleCollection(collectionId, collected) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      UPDATE collections 
      SET collected = ${collected} 
      WHERE id = ${collectionId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteCollection(collectionId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      DELETE FROM collections 
      WHERE id = ${collectionId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function toggleTask(taskId, current, target) {
    const newCurrent = current >= target ? 0 : target;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
      UPDATE tasks 
      SET current = ${newCurrent} 
      WHERE id = ${taskId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function toggleTaskStatus(taskId, currentStatus, target) {
    const nextValue = currentStatus >= target ? 0 : currentStatus + 1;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        UPDATE tasks 
        SET current = ${nextValue} 
        WHERE id = ${taskId}
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addNoteToIsland(islandId, title, content) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO notes (island_id, title, content) 
        VALUES (${islandId}, ${title}, ${content})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    toggleTaskCompletion,
    toggleCollectionStatus,
    addTask,
    addResident,
    deleteResident,
    addNote,
    deleteNote,
    deleteTask,
    toggleCollection,
    deleteCollection,
    toggleTask,
    toggleTaskStatus,
    addNoteToIsland
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleTaskCompletion, "60cc06f9cb51576ea042fa9d6a9db58122f1fca406", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleCollectionStatus, "60f62dc4899c9dae8e890d168cc92adc3e6a46d752", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTask, "6087408c431bfa5d9a58213aa94ef81492b1f042c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addResident, "607d2aad35a0dffc9c58af8e65d6c199ff59637eae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteResident, "40263a06fafccd7e992998ccda44c847d55a2d24c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addNote, "60972e8b374d78ad2d0608be5470a13d85a046f066", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNote, "40677f0fbe32c3b02e1b9b852925a11e2e866cffe5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTask, "4079978194bc2bd68cb63b5c2583bbb83f46dd27ac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleCollection, "60cba34593700e6aa86c47a2a3cef1e01269339c03", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCollection, "40a4f81e71e4e96a9a4afb952f506ed24dfc13f3b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleTask, "7023b7524d6502ee01472c8badb3c64567ede18eec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleTaskStatus, "705d3bf413c4661097b7f8f553bfb4e5db5468dc71", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addNoteToIsland, "70ea1a630463b884495c0d721b12d779961dabb532", null);
}),
"[project]/app/auth-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"008e6936adc6f1e5f5d6dee81d0f4cb8d5387077c7":{"name":"logout"},"401ea7005dc2c4bd0083800840e1a20c7d522cf486":{"name":"signUp"},"40bac0ef11541d890b243d1546b710591e3367f5c7":{"name":"login"}},"app/auth-actions.ts",""] */ __turbopack_context__.s([
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function signUp(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        // Check if user already exists
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`SELECT id FROM users WHERE email = ${email}`;
        if (existing.length > 0) {
            throw new Error('An account with this email already exists.');
        }
        // Insert new user into Neon database
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
            INSERT INTO users (display_name, email, password_hash) 
            VALUES (${name}, ${email}, ${password}) 
            RETURNING id, display_name
        `;
        const user = users[0];
        // Set session cookie
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('user_id', user.id.toString(), {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });
    } catch (error) {
        console.error('Signup error:', error);
        throw new Error(error.message || 'Database registration failed.');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`SELECT * FROM users WHERE email = ${email}`;
        const user = users[0];
        if (!user || user.password_hash !== password) {
            throw new Error('Invalid email or password.');
        }
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('user_id', user.id.toString(), {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });
    } catch (error) {
        console.error('Login error:', error);
        throw new Error(error.message || 'Login failed.');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function logout() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('user_id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signUp,
    login,
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signUp, "401ea7005dc2c4bd0083800840e1a20c7d522cf486", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40bac0ef11541d890b243d1546b710591e3367f5c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "008e6936adc6f1e5f5d6dee81d0f4cb8d5387077c7", null);
}),
"[project]/app/db-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40431c6d28b4cf0f4625604f703f5312b1b2712ba4":{"name":"deleteCollectionItem"},"40522145cc83e878ee984a6dc851e0faec5af1955c":{"name":"deleteResident"},"40540dd11704c983e0b3a3a958dcf92ed0160b77ca":{"name":"deleteNote"},"4056576776bddf9c3a882d10884e7c7fe91d2c6eeb":{"name":"deleteGalleryPhoto"},"40cebd15c48a25d109ea85a009932a407c8f03fe4f":{"name":"deleteTask"},"608e37cdb1eba66c89fb8ff3c0cb39548e1ba7fc01":{"name":"addNote"},"60f20b6aa5375580d86a103e6a4057e873fcb58b5f":{"name":"toggleCollectionStatus"},"700ef2ba5843a8e627eb78970929618bc3a4e91ed0":{"name":"addIslandNote"},"7038be840b0f0007eb8761403d3edfc16ee7e6361f":{"name":"updateTaskProgress"},"708ee5a45c87e9107e13fe5d6fffd41ee3fd97d190":{"name":"addCollectionItem"},"7814feebaf6d7c25a0121ef755ef373637f6de6629":{"name":"addGalleryPhoto"},"78d714b81fd3c9fe6c4f536d7d45d394e8a95dc962":{"name":"addResident"}},"app/db-actions.ts",""] */ __turbopack_context__.s([
    "addCollectionItem",
    ()=>addCollectionItem,
    "addGalleryPhoto",
    ()=>addGalleryPhoto,
    "addIslandNote",
    ()=>addIslandNote,
    "addNote",
    ()=>addNote,
    "addResident",
    ()=>addResident,
    "deleteCollectionItem",
    ()=>deleteCollectionItem,
    "deleteGalleryPhoto",
    ()=>deleteGalleryPhoto,
    "deleteNote",
    ()=>deleteNote,
    "deleteResident",
    ()=>deleteResident,
    "deleteTask",
    ()=>deleteTask,
    "toggleCollectionStatus",
    ()=>toggleCollectionStatus,
    "updateTaskProgress",
    ()=>updateTaskProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function updateTaskProgress(taskId, current, target) {
    const nextCurrent = current >= target ? 0 : current + 1;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`UPDATE tasks SET current = ${nextCurrent} WHERE id = ${taskId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteTask(taskId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM tasks WHERE id = ${taskId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function toggleCollectionStatus(collectionId, currentStatus) {
    const nextStatus = !currentStatus;
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`UPDATE collections SET collected = ${nextStatus} WHERE id = ${collectionId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addCollectionItem(islandId, category, name) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO collections (island_id, category, name, collected) 
        VALUES (${islandId}, ${category}, ${name}, false)
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteCollectionItem(collectionId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM collections WHERE id = ${collectionId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addResident(islandId, name, species, personality) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO residents (island_id, name, species, personality) 
        VALUES (${islandId}, ${name}, ${species}, ${personality})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteResident(residentId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM residents WHERE id = ${residentId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addIslandNote(islandId, title, content) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO notes (island_id, title, content) 
        VALUES (${islandId}, ${title}, ${content})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteNote(noteId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM notes WHERE id = ${noteId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addGalleryPhoto(islandId, title, tag, url) {
    const dateStr = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO gallery (island_id, title, date, tag, url) 
        VALUES (${islandId}, ${title}, ${dateStr}, ${tag}, ${url})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function deleteGalleryPhoto(photoId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM gallery WHERE id = ${photoId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function addNote(islandId, formData) {
    const title = formData.get('title');
    const content = formData.get('content');
    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        INSERT INTO notes (island_id, title, content) 
        VALUES (${islandId}, ${title}, ${content})
    `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateTaskProgress,
    deleteTask,
    toggleCollectionStatus,
    addCollectionItem,
    deleteCollectionItem,
    addResident,
    deleteResident,
    addIslandNote,
    deleteNote,
    addGalleryPhoto,
    deleteGalleryPhoto,
    addNote
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTaskProgress, "7038be840b0f0007eb8761403d3edfc16ee7e6361f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTask, "40cebd15c48a25d109ea85a009932a407c8f03fe4f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleCollectionStatus, "60f20b6aa5375580d86a103e6a4057e873fcb58b5f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCollectionItem, "708ee5a45c87e9107e13fe5d6fffd41ee3fd97d190", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCollectionItem, "40431c6d28b4cf0f4625604f703f5312b1b2712ba4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addResident, "78d714b81fd3c9fe6c4f536d7d45d394e8a95dc962", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteResident, "40522145cc83e878ee984a6dc851e0faec5af1955c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addIslandNote, "700ef2ba5843a8e627eb78970929618bc3a4e91ed0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNote, "40540dd11704c983e0b3a3a958dcf92ed0160b77ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addGalleryPhoto, "7814feebaf6d7c25a0121ef755ef373637f6de6629", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteGalleryPhoto, "4056576776bddf9c3a882d10884e7c7fe91d2c6eeb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addNote, "608e37cdb1eba66c89fb8ff3c0cb39548e1ba7fc01", null);
}),
"[project]/app/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres/src/index.js [app-rsc] (ecmascript)");
;
const connectionString = process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgres') ? process.env.DATABASE_URL : 'postgres://postgres:postgres@localhost:5432/postgres';
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(connectionString, {
    ssl: {
        rejectUnauthorized: false
    }
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0herx12._.js.map