---
description: |
  fresh_brick_wall_middleware is the module for Fresh that checks that the communication passed through Brick Wall.

---

# fresh_brick_wall_middleware

fresh_brick_wall_middleware is the module for [Fresh](https://fresh.deno.dev/) that checks that the communication passed through [Brick Wall](https://brickwall.deno.dev).

## Setup

```js
// routes/_middleware.ts
import { brickWallHandler } from "https://deno.land/x/fresh_brick_wall_middleware/mod.ts";

export const handler = [brickWallHandler];
```

And env.

```sh
BRICK_WALL_JWT_KEY=XXXXXXXXXXXXX
BRICK_WALL_HASHED_PASSWORD=[hashed password]
```

`BRICK_WALL_JWT_KEY` is generate key from `crypto.subtle.generateKey`.
`BRICK_WALL_HASHED_PASSWORD` is hash from bcrypt.