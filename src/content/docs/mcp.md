---
title: Introduction to OdooClaw
description: Getting started with the ultra-lightweight AI assistant for Odoo.
---

OdooClaw is an **AI Assistant for Odoo ERP** designed to be fast, secure, and extremely light on resources.

Originally a deep fork of PicoClaw (by Sipeed), OdooClaw was rewritten in Go to integrate natively with Odoo's Discuss module while maintaining a microscopic memory footprint.

### Why OdooClaw?

In the current landscape of AI, most agents require significant resources (NodeJS, Python runtimes with heavy dependencies). OdooClaw takes a different approach:

1.  **Written in Go**: Compiled to a single binary, it runs on almost any hardware (x86, ARM, RISC-V).
2.  **Ultra-Lightweight**: Uses **less than 10MB of RAM**, allowing it to reside on the same server as your Odoo production instance without impact.
3.  **Discuss Native**: No external portals. Users interact with the assistant exactly where they work: Odoo Discuss.
4.  **Permission-Aware**: It doesn't use a "god-token". It assumes the user's session credentials to respect Odoo's ACLs.

---

### Core Principles

- **Speed**: Boots in under 1 second.
- **Security**: Asynchronous webhooks release Odoo workers instantly.
- **Precision**: Intelligent ORM bridge prevents LLM hallucinations.
- **Multimodal**: Handles Voice, OCR (Invoices), and Excel reports via MCP servers.

Next step: [Quick Start](/docs/quickstart/)
