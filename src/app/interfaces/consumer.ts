export interface ConsumerRequest {
  applicationType: string;
  applicationName: string;
  redirectUrl: string;
  developerEmail: string;
  applicationDescription: string;
  company: string;
}

export interface ConsumerResponse {
  consumerId: string;
  applicationType: string;
  applicationName: string;
  redirectUrl: string;
  developerEmail: string;
  applicationDescription: string;
  clientCertificate: string;
  consumerKey: string;
  consumerSecret: string;
  oauth2ClientId: string;
  oatuh2Redirect: string;
  oauth2CllientScope: string;
  oauth2JwsAlg: string;
  oauth2JwsPk: string;
}
