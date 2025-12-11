// This file is auto-generated - DO NOT EDIT
// Generated types that should NOT be linted but SHOULD be type-checked
/* oxlint-disable */

export interface GeneratedUser {
  id: number;
  name: string;
  email: string;
}

export interface GeneratedPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

export type GeneratedUserRole = "admin" | "user" | "guest";

// A type error should be reported here
// A lint error will also be reported here, since `generatedValue` is unused
const generatedValue: string = true;
