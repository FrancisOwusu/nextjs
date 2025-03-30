import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true, // This makes the ConfigModule available throughout the app
      ignoreEnvFile:false,
      expandVariables:true,
      load:[configuration]
    }),
  ],
})
export class ConfigAppModule {}
ConfigModule.forRoot({
    envFilePath: '.development.env',
  });

ConfigModule.forRoot({
    envFilePath: ['.env.development.local', '.env.development'],
  });
  
ConfigModule.forRoot({
    ignoreEnvFile: true,
  });

ConfigModule.forRoot({
    isGlobal: true,
  });
  
  