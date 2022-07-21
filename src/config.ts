import nodeConfig from 'config';

interface SMTPConfig {
  host: string;
  port: number;
  useSsl: boolean;
  user: string;
  password: string;
}

interface Config {
  bearerToken: string;
  smtp: SMTPConfig;
}

const config: Config = {
  bearerToken: nodeConfig.get<string>('bearerToken'),
  smtp: {
    host: nodeConfig.get<string>('smtp.host'),
    port: nodeConfig.get<number>('smtp.port'),
    useSsl: nodeConfig.get<boolean>('smtp.useSsl'),
    user: nodeConfig.get<string>('smtp.user'),
    password: nodeConfig.get<string>('smtp.password'),
  },
};

export default config;
