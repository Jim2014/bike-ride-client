interface AppConfig {
  serverDomain: string;
  socketURL: string;

}

export const APP_CONFIG: AppConfig = {

  serverDomain: 'http://localhost:3000/',
  socketURL:'http://localhost:4000'

};