export const configuration = () => {
  return {
    enviroment: process.env.NODE_ENV,
    port: process.env.PORT,
    clientUrl: process.env.CLIENT_URL,
    dbUrl: process.env.MONGO_DB_URL,
    mailHost: process.env.MAIL_HOST,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    mailFrom: process.env.MAIL_FROM,
  };
};
