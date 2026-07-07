import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * You can write your custom database schema here.
 * Use this file for also re-exporting any generated schema for drizzle to generate proper migrations.
 */

export const signups = sqliteTable("signups", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  fullName: text("full_name"),
  ghlContactId: text("ghl_contact_id"),
  welcomeEmailSentAt: integer("welcome_email_sent_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});
