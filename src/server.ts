import "dotenv/config";

import connectDB from "./config/db";
import createServer from "./utils/createServer";
import swaggerDocs from "./utils/swagger";
import logger from "./utils/logger";

const app = createServer();

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`);

  await connectDB();
  swaggerDocs(app, PORT);
});
