declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      SITE_URL: string;
      NODE_ENV: "development" | "production" | "test";
      MEDIA_DOMAIN: string;
      WORDPRESS_URL: string;
      AVATAR_DOMAIN: string;
      NEXT_PUBLIC_MAIN_DOMAIN: string;
      MAILCHIMP_AUDIENCE_ID: string;
      MAILCHIMP_API_SERVER: string;
      MAILCHIMP_API_KEY: string;
    }
  }
}
