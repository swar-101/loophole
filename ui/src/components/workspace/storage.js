import {openDB} from "idb";

export const dbPromise = openDB("loophole-db", 1, {
    upgrade(db) {
        db.createObjectStore("problems", { keypath : "id"});
    }
});

export async function saveProblem(problem) {
    const db = await dbPromise;
    await db.put("problems", problem);
}

export async function loadProblem(id) {
    const db = await dbPromise;
    return db.get("problems", id)
}