# Genesis

Genesis is a helper library that provides useful methods and prototypes for Javascript and TypeScript development.

## Installing
```
npm i @genesis/general@https://github.com/mhdhadjar/genesis-general.git
```

### Prototypes
Import prototypes to a top level file e.g. index.js or app.js to use prototypes.

```
import "@genesis/general/dist/prototypes";

const dateString = new Date().toCustomLocaleString("yyyy-MM-dd HH-mm-ss")
```

### Helper Functions
To get rid of null or undefined error, you can use helpers as functions
```
import Genesis from "@genesis/general";

const dateString = Genesis.toCustomLocaleString(new Date(), "yyyy-MM-dd HH-mm-ss");

```