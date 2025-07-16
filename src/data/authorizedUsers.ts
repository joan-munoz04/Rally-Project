// data/authorizedUsers.ts

export interface AuthorizedUser {
  username: string;
  password: string;
  role: "control" | "owner"; // puedes expandir si hay más roles
}

export const authorizedUsers: AuthorizedUser[] = [
  {
    username: "admin.control",
    password: "control123",
    role: "control",
  },
  {
    username: "admin.owner",
    password: "owner123",
    role: "owner",
  },
];
