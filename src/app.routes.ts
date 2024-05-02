import { Routes } from "@nestjs/core";
import { FtpModule } from "app/modules/ftp/ftp.module";
import { HelloModule } from "app/modules/hello/hello.module";
import { SftpModule } from "app/modules/sftp/sftp.module";

export const appRoutes: Routes = [
    {
        path: 'api',
        children: [
            { path: 'hello', module: HelloModule },
            { path: 'ftp', module: FtpModule },
            { path: 'sftp', module: SftpModule }
        ]
    }
]