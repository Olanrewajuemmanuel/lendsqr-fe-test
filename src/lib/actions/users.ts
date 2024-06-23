"use server";
import { Status } from "@/types";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const adminUser = new Map();
adminUser.set("username", "adedeji");
adminUser.set("email", "adedeji@lendsqr.com");
adminUser.set("password", "lendsqr-test");

export async function getLocalJson() {
  const filePath = path.join(process.cwd(), "public/users.json");
  const buffer = await readFile(filePath, { encoding: "utf-8" });
  return await JSON.parse(buffer);
}

async function _updateLocalJson(data: any) {
  const filePath = path.join(process.cwd(), "public/users.json");
  await writeFile(filePath, JSON.stringify(data), { encoding: "utf-8" });
}

export async function login(email: string, password: string) {
  // Mock API call to DB
  if (email.toLowerCase() === adminUser.get("email")) {
    // compare passwords
    if (password !== adminUser.get("password")) return false;
    return adminUser; // login successful
  } else {
    return false;
  }
}

export async function findAll(limitEnd: number, limitStart?: number) {
  const users = await getLocalJson();
  const limitedUsersRecord = users.slice(limitStart ?? 0, limitEnd);

  return limitedUsersRecord;
}

export async function findById(id: string) {
  const users = await getLocalJson();
  const user = (users as { _id: string }[]).find((user) => user._id === id);
  if (!user) return {};

  return user;
}

export async function findByUsername(username: string) {
  const users = await getLocalJson();

  const user = users.find(
    (user: { username: string }) => user.username === username
  );

  if (!user) return {};

  return user;
}

export async function filter(
  organization?: string,
  username?: string,
  email?: string,
  dateJoined?: string,
  phoneNumber?: string,
  status?: string,
  options?: {
    limitStart?: number;
    limitEnd?: number;
  }
) {
  const users = await getLocalJson();
  const filteredUsers = users.filter(
    (user: {
      organisation: { name: string };
      username: string;
      email: string;
      registered: string;
      phone: string;
      status: string;
    }) => {
      return (
        (!organization || user.organisation.name.includes(organization)) &&
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        // Match similar date strings
        (!dateJoined ||
          !(new Date(dateJoined).getDay === new Date().getDay) ||
          user.registered.split("T")[0] === dateJoined.split("T")[0]) &&
        (!phoneNumber || user.phone.includes(phoneNumber)) &&
        (!status || user.status === status)
      );
    }
  );
  return filteredUsers.slice(options?.limitStart ?? 0, options?.limitEnd ?? 10);
}

export async function updateByStatus(id: string, status: Status) {
  const users = await getLocalJson();

  const updatedUsers = users.map((user: { _id: string }) => {
    if (user._id === id) {
      return {
        ...user,
        status: status,
      };
    }
    return user;
  });
  _updateLocalJson(updatedUsers);
}
