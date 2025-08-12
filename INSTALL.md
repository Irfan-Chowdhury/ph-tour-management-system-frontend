### install react with vite 

```bash
npm create vite
```

```bash
npm i react-router
```

```bash
npm i react-hook-form
```

### Add Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

import

```bash
@import "tailwindcss";
```

### Add TsConfig JSON
```json
    [],
    "compilerOptions": {
    "baseUrl": ".",
    "paths": {
        "@/*": ["./src/*"]
    }
    }
```

### tsconfig.app.json
```json
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
```

### Update vite.config.ts
```bash
npm install -D @types/node
```

### Run the CLI
```bash
npx shadcn@latest init
```

### Add Button
```bash
npx shadcn@latest add button
```

### UI:
Originui : https://originui.com/
Hyperui : https://www.hyperui.dev/


### Navbar Install : (originui)
```bash
npx shadcn@latest add https://originui.com/r/comp-577.json
```