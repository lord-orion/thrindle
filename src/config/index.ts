const joi = require("joi");
require("dotenv").config();

const envVarsSchema = joi
  .object({
    NODE_ENV: joi.string().default("development"),
    MONGO_URI: joi.string().required().description("MongoDB URI is required"),
  })
  .unknown()
  .required();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: {
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    isTest: process.env.NODE_ENV === "test",
  },
  mongo: {
    host: envVars.MONGO_URI,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
  },
};

export default config;
