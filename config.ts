import nodeConfig from 'config';

interface Config {
  bearerToken: string;
}

const config: Config = {
  bearerToken: nodeConfig.get<string>('bearerToken'),
};

export default config;
