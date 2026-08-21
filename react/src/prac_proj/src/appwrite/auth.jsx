import {Client,ID,Account} from 'appwrite'
import conf from '../conf/conf'

export class AuthService{
    client = new Client()
    account
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAcc = await this.account.create({
                userId:ID.unique(),
                email,
                password,
                name
            })
            if(userAcc) return this.login({email,password})
        } catch (error) {
            console.log('createAcc error',error);
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password
            })
        } catch (error) {
            console.log('login-appwrite-error',error);
            throw error
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('getAccount error',error);
            throw error
        }
    }

    async updateEmail({email,password}){
        try {
            return await this.account.updateEmail({
                email,
                password
            })
        } catch (error) {
            console.log('update error',error);
            throw error
        }
    }

    async updatePassword({password,oldPassword}){
        try {
            return await this.account.updatePassword({
            password,
            oldPassword
        })
        } catch (error) {
            console.log('updateError',error);
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log('logout error',error);
            throw error
            
            
        }
    }
}

const authService = new AuthService()

export default  authService