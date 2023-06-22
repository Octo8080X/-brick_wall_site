---
description: |
  Brick Wall is simple only HTTP WAF. 
---

## Introduction

Brick Wall is simple HTTP/HTTPS only Web application firewall.

It is intended to run with Deno deploy.
The purpose of the Brick Wall is to separate the security (e.g., prohibit access by IP) functionality from the applications running on the Deno Deploy.  

The main application will have a filter that checks that the communication has passed through the Brick Wall.
Only communications that pass the various rules provided in the Brick Wall are sent to the main application.

It is then to provide this functionality dynamically and with extensions as needed.

![](/Brick_wall_insroduction_001.png)
