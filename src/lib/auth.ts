import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    return null;
  }
}

/**
 * Helper to get the logged-in user payload from cookie
 */
export function getUserFromCookie() {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  return verifyToken(token);
}
