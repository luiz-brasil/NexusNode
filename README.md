# NexusNode

**NexusNode** is a high-performance, web-first link hub designed with structural integrity and performance in mind. This project is a practical implementation of **Spec-Driven Development (SDD)**, where the entire application architecture, routing, and components are derived from rigorous specifications.

This project is an Study project about **Spec-Driven Development (SDD)**, using **OpenSpec** (Fission AI) as the source of truth, orchestrated by the **Antigravity** engine.

## The Core Concept

Unlike traditional web applications, **NexusNode** was built using a "Spec-First" approach. By utilizing **OpenSpec** (Fission AI) as the source of truth, the project ensures that the implementation stays 100% aligned with the defined requirements, orchestrated by the **Antigravity** engine.

* **No Runtime LLM:** Pure, optimized code for maximum speed and reliability.
* **Schema-Validated:** All data structures and UI components follow the OpenSpec contract.
* **Static-First Performance:** Leveraging Astro for near-zero client-side JavaScript.

## Tech Stack

* **Specification:** [OpenSpec](https://github.com/Fission-AI/OpenSpec)
* **Orchestration:** Antigravity
* **Methodology:** Spec-Driven Development (SDD)
* **Framework:** [Astro](https://astro.build/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** Tailwind CSS

## Project Structure

The heart of the project lies in the specification files. The Antigravity engine interprets these files to program the application logic and Astro components.

```text
├── .specs/              # OpenSpec definition files (The Source of Truth)
├── src/
│   ├── components/      # UI components generated via Antigravity
│   ├── pages/           # File-based routing managed by Astro
│   └── content/         # Data schemas for links and profiles
├── public/              # Static assets
└── antigravity.config   # Configuration for the Antigravity engine
```

## How it works

1. Define: Requirements, layouts, and link schemas are documented in the .spec files using the OpenSpec framework.

2. Generate: Antigravity reads the specifications to scaffold the Astro pages and optimized CSS/JS.

3. Iterate: Changes are made to the specs first, ensuring the codebase remains a direct reflection of the documentation.

## License

This project is licensed under the MIT License - see the [LICENCE](LICENCE.md) file for details.