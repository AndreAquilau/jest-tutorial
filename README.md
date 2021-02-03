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
#### Conferir se existe algum bug fixo nos pacotes.
```bash
yarn audit fix

0 vulnerabilities found - Packages audited: 840
```
#### Check se a alguma atualização nos nossos packotes.
```bash
yarn check -u
```
#### Iniciando arquivo de configuração do jest
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
#### Iniciando arquivo de configuração do jest com Ts-Jest Config:Init (Typescript).
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
#### Executando teste
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
#### Como criar um arquivo de teste
> index.test.ts or index.spec.ts não a diferença entre os dois ambos são testes.
#### Criando teste com test and it
>persistency.spec.ts
```ts
it('describe for test (IT)', () => {
  const number = 1;

  expect(number).toBe(1);
});

test('describe for test (TEST)', () => {
  const nome = 'Andre';
  expect(nome).toBe('Andre');
});
```
```bash
npx jest

 PASS  src/services/persistency.spec.ts
  ✓ describe for test (IT) (2 ms)
  ✓ describe for test (TEST)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.431 s
Ran all test suites.
```

#### toBe and not.toBe
> expect(value).toBe(valor esperado)
Quando usamos toBe quer dizer que esperamos aquele valor.
> expect(value).not.toBe(valor nao esperado).
Quando usamos o not estamos negando o valor a ver recebido.

#### Describe group test
Usamos um describe quando queremos agrupar um grupo de teste.
```ts
describe('Testando alguma coisa', () => {
  it('describe for test (IT)', () => {
    const number = 1;

    expect(number).toBe(1);
  });

  test('describe for test (TEST)', () => {
    const nome = 'Andre';
    expect(nome).toBe('Andre');
  });
});

describe('Teste 1', () => {
  it('describe for test (IT)', () => {
    const number = 1;

    expect(number).toBe(1);
  });

});


describe('Teste 2', () => {
  test('describe for test (TEST)', () => {
    const nome = 'Andre';
    expect(nome).toBe('Andre');
  });
});
```

#### Teste em valores primitivos
```ts
describe('Primite values', () => {
  test('should test jest assertions', () => {
    const number = 10;

    // Teste em dados Primitivos

    expect(number).toBe(number);
    // espero ser

    expect(number).toEqual(number);
    // espero igualar

    expect(number).not.toBeNull();
    // espero nao ser nulo

    expect(number).not.toBeFalsy();
    // espero nao ser falso

    expect(number).toBeGreaterThan(9);
    // espero ser maior que 9

    expect(number).toBeGreaterThanOrEqual(10);
    // espero ser maior que 10 ou igual

    expect(number).toBeLessThan(11);
    // espero ser menor que 11

    expect(number).toBeLessThanOrEqual(10);
    // espero ser menor que 10 ou igual

    expect(number).toBeCloseTo(10);
    // recebe dois paramentros primerio value, segundo casas decimal default 2
    // espero esta perto de 10

    expect(number).toHaveProperty('toString');
    // espero ter propriedade number.toString
  });
});
```
#### Teste em Objetos
```ts

describe('Objects', () => {
  test('should test jest assertions', () => {
    const person = {
      name: 'Andre',
      age: 20,
    };

    const anotherPerson = {
      name: 'Andre',
      age: 20,
    };

    /*

    expect(person).toBe(anotherPerson);

    toBe -> so funciona em valores primitivos.
    */

    expect(person).toEqual(anotherPerson);
    // expero igualar

    expect(person).toHaveProperty('name');
    // espero ter propriedade name

    expect(anotherPerson).toHaveProperty('age');
    // espero ter propriedade age

    expect(person.name).toBe('Andre');
    // espero na propriedade name Andre
    // Check Value Property
  });
});

```

#### Teste com SpyOn teste de comportamento
```ts
import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  /*
    afterEach(() => jest.clearAllMocks());
    limpa o mocks a cada teste.

    obs: quando um metodo e chamado em um teste isso e somado
    como uma chamada se chamar de novo sera mais uma chamada
    para resolver isso usamos o clearAllMocks pois os jest por
    default nao limpa os Mocks entre os teste.
  */

  test('should return undefined', () => {
    // System Under Test
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
    // espero ser undefined

  });

  test('should call console.log once', () => {
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    /*
      jest.spyOn(objeto, 'metodo')
      usado para manitorar se um metodo foi chamado
    */
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    /*
     espero que o metodo jest.spyOn(console, 'log') seja chamado apenas uma vez.
    */
  });

  test('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    /*
      jest.spyOn(objeto, 'metodo')
      usado para manitorar se um metodo foi chamado
    */
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
    /*
      espero que o metodo jest.spyOn(console, 'log') seja chamado e com o valor
      "Pedido salvo com sucesso..." como paramentro.
    */
  });
});
```

#### Scripts dev, start and build
```json
  "scripts": {
    "start": "node ./dist/services/server.js",
    "dev": "ts-node-dev --require tsconfig-paths/register --respawn --transpile-only  --ignore-watch node_modules --no-notify ./src/services/server.ts",
    "build": "babel src --extensions \".js,.ts\" --out-dir dist  --copy-files --no-copy-ignore",
    "test": "jest",
    "test:silent": "npx jest --watchAll --noStackTrace",
    "lint": "eslint ./src/**/* --ext .ts,.tsx,.js,.jsx --fix"
  }
```
