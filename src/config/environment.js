const ENV = {
  isDevelopment: process.env.NODE_ENV === "development",
  ...process.env
};

export default ENV;
