## Typescript(S.O.L.I.D)

#### Create .editorconfig
```.env
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

#### Config auto save eslint in vscode
>.vscode/settings.json
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "code-runner.executorMap": {
    "javascript": "node",
    "typescript": "npx ts-node-dev --require tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules --no-notify --files",
  }

}
```

#### Init Project Typescript
```bash
yarn add -D typescript ts-node-dev @types/node tsconfig-paths
```
```bash
yarn tsc --init
```

#### Config Prettier and PrettierIgnore
```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```
> .prettierrc.js
```js
module.exports = {
  "arrowParens": "avoid",
  "trailingComma": "all",
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "endOfLine": "all",
  "printWidth": 120
};
```
> .prettierignore
```.config
node_modules
./build
./dist
/*.js
```
#### Config Eslint and Prettier
```bash
yarn add -D eslint
```
```bash
yarn eslint --init
```
>.eslint.js
```js
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error'
  },
};
```
> .eslintignore
```.config
node_modules
./dist
./build
/*.js
```
#### Config Babel for Typescript
```bash
yarn add @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```
> babel.config.js
```js
module.exports = {
  presets:[
    ['@babel/preset-env', {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript',
  ],
  plugins:[
    [
      'module-resolver',{
        alias:{}
      }
    ],
    ['@babel/plugin-proposal-class-propeties', { loose: true }],
    ['@babel/plugin-proposal-decorators', {legacy: true}]
  ]
}
```
#### Typescript tsconfig.json
```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "ES2017",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["ES2015", "ESNext","ES2017"],                             /* Specify library files to be included in the compilation. */
    "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    // "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    "resolveJsonModule": true,
    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```


#### Install jest ts-jest @types/jest
```bash
yarn add -D jest ts-jest
```
##### Conferir se existe algum bug fixo nos pacotes.
```bash
yarn audit fix

0 vulnerabilities found - Packages audited: 840
```
##### Check se a alguma atualização nos nossos packotes.
```bash
yarn check -u
```
##### Iniciando arquivo de configuração do jest
```bash
yarn jest --init

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls and instances between every test? ... no

✏️  Modified C:\Users\Luan\Desktop\S.O.L.I.D\Typescript-TDD-Jest\package.json
```
##### Iniciando arquivo de configuração do jest com Ts-Jest Config:Init (Typescript).
```bash
npx ts-jest config:init
```
> jest.config.js
```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```
##### Executando teste
```bash
npx jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In C:\Users\Luan\Desktop\S.O.L.I.D\Typescript-TDD-Jest
  56 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 56 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```
##### Como criar um arquivo de teste
> index.test.ts or index.spec.ts não a diferença entre os dois ambos são testes.

#### Scripts dev, start and build
```json
{
  "scripts":{
    "start": "node ./dist/services/server.js",
    "dev": "ts-node-dev --require tsconfig-paths/register --respawn --transpile-only  --ignore-watch node_modules --no-notify ./src/services/server.ts",
    "build": "babel src --extensions \".js,.ts\" --out-dir dist  --copy-files --no-copy-ignore",
    "test": "jest"
  }
}
```
