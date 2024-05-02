import { Module } from '@nestjs/common';
import { SftpService } from 'app/core/providers/sftp/sftp.service';

@Module({
    providers: [SftpService],
    exports: [SftpService]
})
export class SftpServiceModule {}