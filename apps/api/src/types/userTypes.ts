import { User } from "@prisma/client"

type UserData = Omit<User, "id" | "createdAt" | "updatedAt">

type UserLogin = Pick<User, "login" | "password">

export { UserData, UserLogin }
