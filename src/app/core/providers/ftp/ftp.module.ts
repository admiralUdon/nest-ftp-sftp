import { Module } from '@nestjs/common';
import { FtpService } from 'app/core/providers/ftp/ftp.service';

@Module({
    providers: [FtpService],
    exports: [FtpService]
})
export class FtpServiceModule {}