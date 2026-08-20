// Databases = tablesDB
//Document = row
//Colleciton = table

import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
      try {
        return await this.databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug, // OR ID.unique()   This is documentId
          {
            title,
            content,
            featuredImage,
            status,
            userId,
          },
        );
      } catch (error) {
        console.log("posting failed", error);
        throw error;
      }
    }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("updatePost failed", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::deletePost::error", error);
      return false; // USE ONLY ONE BTW THIS //  throw error
    }
  }

  async getPost(slug) {
    // THIS GIVES ONLY SINGLE DOCS ONLY IF U KNOW ID.
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    //THIS GIVES ALL DOCS WITH FILTER OPTIONS.
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      throw error;
    }
  }

  // FILE UPLOAD SERVICE

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("appwrite service :: uploadFile :: error", error);
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId, 
        fileId
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId, 
      fileId
    );
  }

  getFileDownload(fileId) {
    return this.bucket.getFileDownload(
      conf.appwriteBucketId, 
      fileId
    );
  }
  
}

const service = new Service();

export default service;
