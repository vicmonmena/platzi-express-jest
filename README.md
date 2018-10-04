# Sobre el proyecto y Jest:

## LICENCIA

[MIT](https://spdx.org/licenses/MIT.html)

## HABILITAR ECMASCRIPT 6:

### Dependencies
```
{
  "devDependencies": {
    "babel-jest": "^20.0.3",
    "babel-polyfill": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}
```

### Babel config (.babelrc file)
```
"presets": ["es2015"]
```

## SOBRE LOS TEST:

### Dónde hubicar los ficheros de test:

*Crear la carpeta `__test__` o `__TEST__` para Jest sepa identificar dónde están los test.*

### Nombres de los ficheros de test:

`[FILENAME].test.js`

### Cómo ejecutar los test:
Desde línea de comnados 
```
jest
```
o bien 
```
jest [FILENAME]
```

- Donde FILENAME es el fichero [FILENAME].test.js

- Otra opción es incluir en los script del package.json el comando jest:
```
{
  ...
  "scripts": {
    "test": "jest"
  },
  ...
}
```

## TESTING NODE EXPRESS APP

- Instalar las siguientes dependendencias:

```
npm install --save-dev babel-cli babel-preset-env jest supertest
```

## COMPARADORES / MATCHERS

- toBe
- not.toBe
- toEqual
- not.toEqual

## PRUEBAS UNITARIAS CON NÚMEROS

- .toBeGreaterThan()
- .toBeGreaterThanOrEqual()
- .toBeLessThan()
- .toBeLessThanOrEqual()
- .toBeCloseTo()

## FUNCIONES QUE DEVUELEN Boolean, Udefined o Null

- .toBeNull()
- .toBeTruthy()
- .toBeFalsy()
- .toBeUndefined()
- .not.toBeTruthy()

# TODO

## SNAPSHOT TESTING

https://jestjs.io/docs/en/next/snapshot-testing

## TESTING MOCK FUNCTIONS

https://jestjs.io/docs/en/next/mock-functions

## TESTING ASYNCHRONOUS FUNCTIONS

https://jestjs.io/docs/en/next/tutorial-async

