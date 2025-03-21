cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./",
    "baseUrl": "./",
    "skipLibCheck": true,
    "incremental": true
  }
}
EOF

## Create the TypeScript config file
## that will be used when building the project with NestJS's CLI
cat <<EOF > tsconfig.build.json
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
EOF