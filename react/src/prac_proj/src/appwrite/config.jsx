import {Client,ID,Query,Storage,TablesDB} from 'appwrite'
import conf from '../conf/conf'

export class Service {
     client = new Client()
     storage
     tablesDB
     constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.tablesDB = new TablesDB(this.client)
        this.storage = new Storage(this.client)
     }

     async createRow({rowId,content,title,status}){
        try {
            await this.tablesDB.createRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId,
                data:{
                    title,
                    content,
                    status
                }
            })
        } catch (error) {
            console.log('createPost error',error);
            throw error
        }
     }

     async getRow({rowId}){
        try {
            return await this.tablesDB.getRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId
            })
        } catch (error) {
            console.log('getRow error',error);
            throw error
        }
     }

    }