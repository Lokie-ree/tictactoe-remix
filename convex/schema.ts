import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  games: defineTable({
    playerCount: v.number(),
    currentPlayer: v.number(),
    board: v.array(v.union(v.number(), v.null())),
    players: v.array(v.id("users")),
    status: v.union(v.literal("waiting"), v.literal("playing"), v.literal("finished")),
    winner: v.optional(v.number()),
  }).index("by_status", ["status"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
