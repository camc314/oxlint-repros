// Main application file that imports from generated types
import { GeneratedUser, GeneratedUserRole } from "../generated/types";

export function createUser(name: string, email: string, _role: GeneratedUserRole): GeneratedUser {
  // _role is intentionally unused in this example, but the type import matters
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  };
}

// Using the generated types
const user = createUser("John Doe", "john@example.com", "admin");
console.log(user);

// Type error: assigning string to number
const userId: number = "not-a-number";
