---
description: |
  Setting up a Brick Wall is not difficult.
---

# Setup

## 1. First Setup

You want to keep Fresh hosted in Deno deploy out of the hands of attackers. Consider such a case.

Let's build a BrickWall!

```js
// BrickWall main unit Application
// app.ts
import { BrickWall } from 'https://deno.land/x/brick_wall@v0.0.5/mod.ts';

const brickWall = new BrickWall({ port: 8001 });
await brickWall.start();
```

Let's configure middleware for Fresh.

```js
// Fresh middleware configure 
// routes/_middleware.ts
import { brickWallHandler } from "https://deno.land/x/fresh_brick_wall_middleware@v0.0.6/mod.ts";

export const handler = [brickWallHandler];
```

Once these settings are made, let's deploy Brick Wall and Fresh to Deno deploy.

At this point, Fresh should not be accessible.
Let's set the environment variables to Brick Wall and Fresh.

```sh
# Set for Brick Wall
BRICK_WALL_JWT_KEY=[Generated_Key]
BRICK_WALL_PASSWORD=[raw_password]
PROXY_TARGET=https://application.deno.dev
```


```bash
# Set for Fresh
BRICK_WALL_JWT_KEY=[Generated_Key]
BRICK_WALL_HASHED_PASSWORD=[hashed_password_by_bcrypt]
```

<small>
For JWT key issuance, see [here](https://github.com/Octo8080/generate_crypto_key).  
To get the hash result with bcrypt, see [here](https://github.com/Octo8080X/generate_bcrypt_hash).
</small>

## 2. Example 1: Static IP Ban

Install the simplest module for starters.  
To install a module that blocks access based on an IP statically defined in the source code, do the following.

```js
import { BrickWall } from 'https://deno.land/x/brick_wall@v0.0.5/mod.ts';
import { createHandler } from "https://deno.land/x/brick_wall_static_ip_ban@v0.0.1/mod.ts";

const brickWall = new BrickWall({ port: 8001 });
brickWall.useHandler(createHandler(["127.0.0.1"]));

await brickWall.start();
```

Once this is set, you should not be able to access the target website through the brick wall.  
This is the simplest way to customize the Brick Wall.


## 3. Example 2: Dynamic Ip Ban

Brick Wall allows you to introduce dynamic restrictions using the API.
As an example, we will deploy a module that sets IPs to be blocked via API.

```js
import { BrickWall } from 'https://deno.land/x/brick_wall@v0.0.5/mod.ts';
import {
  brickWallIpBanHandler,
  ipBanApiRouter,
} from "https://deno.land/x/brick_wall_ip_ban@v0.0.1/mod.ts";

const brickWall = new BrickWall({ port: 8001 });
brickWall.useHandler(brickWallIpBanHandler);
brickWall.useApiRouter(ipBanApiRouter);

await brickWall.start();
```

This module does not appear to provide any configuration, but allows BrickWall to provide an API to configure IPs to be blocked, allowing dynamic definition of blocked targets.

See separate [documentation](/modules/brick_wall_ip_ban ) for the API provided by brick_wall_ip_ban.


## 4. Customize

As you have seen, Brick Wall is designed to allow both static and dynamic customization.  
We encourage you to customize it as you wish.