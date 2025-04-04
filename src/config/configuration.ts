
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    },
    server:process.env.URL
  });
  

//   import { readFileSync } from 'fs';
//   import * as yaml from 'js-yaml';
//   import { join } from 'path';
  
//   const YAML_CONFIG_FILENAME = 'config.yaml';
  
//   export default () => {
//     return yaml.load(
//       readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
//     ) as Record<string, any>;
//   };
  
/*
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
*/