import { Module } from '@nestjs/common';
import { SftpServiceModule } from 'app/core/providers/sftp/sftp.module';
import { SftpController } from 'app/modules/sftp/sftp.controller';

@Module({
    imports: [SftpServiceModule],
    controllers: [SftpController]
})
export class SftpModule {}