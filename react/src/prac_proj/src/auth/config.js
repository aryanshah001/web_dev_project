import {Client,TablesDB, ID,Storage,Query} from 'appwrite'
import conf from '../conf/conf'

export class ConfigService{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,content,userId,featuredImage,slug}){
        try {
           return await this.databases.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                },)
   
            
        } catch (error) {
            console.log('error',error);
            throw error
        }
    }
}
const service = new ConfigService()

export default service