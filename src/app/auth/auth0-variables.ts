interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'gxESxRxYaWVza4Mafxss2x4Q6oeSLR8m',
  domain: 'tonghann.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};