import { Client, Account, ID, Databases } from "appwrite"

const apiEndpoint = import.meta.env.VITE_APPWRITE_API_ENDPOINT
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

const client = new Client()

client.setEndpoint(apiEndpoint).setProject(projectId)

export const account = new Account(client)
export const databases = new Databases(client)
export const id = ID