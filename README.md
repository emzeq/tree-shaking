```
λ webpack --mode production
Hash: d8e843a249b42412477e
Version: webpack 4.43.0
Time: 880ms
Built at: 05/04/2020 5:59:31 PM
     Asset      Size  Chunks             Chunk Names
central.js  72.5 KiB       0  [emitted]  central
 direct.js  1.05 KiB       1  [emitted]  direct
Entrypoint central = central.js
Entrypoint direct = direct.js
[13] ./node_modules/moment/src/lib/units/month.js + 1 modules 9.92 KiB {0} [built]
     |    2 modules
[26] ./node_modules/moment/src/lib/create/valid.js + 1 modules 1.88 KiB {0} [built]
     |    2 modules
[36] ./node_modules/moment/src/lib/create/from-anything.js + 8 modules 25.1 KiB {0} [built]
     |    9 modules
[44] ./src/used.ts 105 bytes {0} {1} [built]
[47] ./src/central.ts 118 bytes {0} [built]
[48] ./src/kitchen-sink.ts 197 bytes {0} [built]
[49] ./src/unused.ts 142 bytes {0} [built]
[50] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
[51] ./src/direct.ts 94 bytes {1} [built]
[52] ./node_modules/moment/src/moment.js + 53 modules 84.6 KiB {0} [built]
     |    54 modules
    + 43 hidden modules

WARNING in ./node_modules/moment/src/lib/locale/locales.js
Module not found: Error: Can't resolve './locale' in '/usr/local/google/home/aagundez/git/tree-shaking/node_modules/moment/src/lib/locale'
 @ ./node_modules/moment/src/lib/locale/locales.js
 @ ./node_modules/moment/src/lib/locale/locale.js
 @ ./node_modules/moment/src/moment.js
 @ ./src/unused.ts
 @ ./src/kitchen-sink.ts
 @ ./src/central.ts
```
