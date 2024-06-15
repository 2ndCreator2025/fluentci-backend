import { generateYaml } from "./config.js";

generateYaml().save(".github/workflows/deploy.yml");
