import { Injectable } from '@nestjs/common';
import * as Client from 'ssh2-sftp-client';
import * as fs from 'fs-extra';
import { sftpConfig } from 'app/config/sftp.config';

@Injectable()
export class SftpService {

    private sftpConfig: Client.ConnectOptions;

    /**
     * Constructor
     */
    
    constructor(
    ) {
        this.sftpConfig = sftpConfig();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------    
    
    /**
     * 
     * TODO: This code need improvement !!!! Please do PR
     * 
     * @param remotePath 
     * @param localPath 
     */
    async downloadFile(remotePath: string, localPath: string): Promise<void> {
        const client = new Client();
        try {
            await client.connect(this.sftpConfig);
            await client.get(remotePath, localPath);
        } finally {
            await client.end();
        }
    }

    /**
     * 
     * TODO: This code need improvement !!!! Please do PR
     * 
     * @param localPath 
     * @param remotePath 
     */
    async uploadFile(localPath: string, remotePath: string): Promise<void> {
        const client = new Client();
        await client.connect(this.sftpConfig);
        await client.fastPut(localPath, remotePath);
        await client.end();
    }

    /**
     * 
     * TODO: This code need improvement !!!! Please do PR
     * 
     * @param filePath 
     */
    async modifyFileContent(filePath: string): Promise<void> {
        // Modify the file content as needed
        const content = await fs.readFile(filePath, 'utf-8');
        const modifiedContent = content.toUpperCase(); // Example modification
        await fs.writeFile(filePath, modifiedContent, 'utf-8');
    }
}
