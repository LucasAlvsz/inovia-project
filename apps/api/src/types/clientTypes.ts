import { Client } from "@prisma/client"

type ClientData = Omit<Client, "id" | "createdAt" | "updatedAt">

type ClientLogin = Pick<Client, "login" | "password">

export { ClientData, ClientLogin }
