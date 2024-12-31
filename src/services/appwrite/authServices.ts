import { account, id } from "./client"

const authServices = {
    createAccount: async (email: string, password: string, name: string) => {
        try {
            const userAccount = await account.create(
                id.unique(),
                email, 
                // Check whether the email is already registered or not
                password,
                name
            )
            if (userAccount) {
                return authServices.loginUser(email, password)
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.error("Appwrite Service Error :: createAccount :: error", error);
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            const user = await account.get()
            console.log("User: ", user)
            return user;
        } catch (error) {
            console.error("Appwrite Service Error :: getCurrentUser :: error", error)
            throw error;
        }
    },

    loginUser: async (email: string, password: string) => {
        try {
            const session = await account.createEmailPasswordSession(email, password)
            console.log("User logged in: ", session)
            return session;
        } catch (error) {
            console.error("Appwrite Service Error :: loginUser :: error", error)
            throw error;
        }
    },

    logoutUser: async () => {
        try {
            await account.deleteSessions();
            console.log("User logged out")
        } catch (error) {
            console.error("Appwrite Service Error :: logoutUser :: error", error)
            throw error;
        }
    }
}

export default authServices