"use server";
import { getLocalJson } from "./users";

export async function findAll(): Promise<Array<string>> {
  const users = await getLocalJson();
  const organisations = users.map(
    (user: { organisation: { name: string } }) => user.organisation.name
  );

  return organisations;
}
