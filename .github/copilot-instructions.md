This repository is a minimal static HTML + JavaScript demo. These instructions help AI coding agents quickly understand the scope, patterns, and dev workflows so contributions are safe and useful.

1) Big picture
- Single-page static app: the HTML file loads `practice.js` directly. There are no build steps or external dependencies.
- Purpose: local experiments with basic functions; code lives entirely in global scope.

2) Key files
- `practice.html`: Main entry point; includes the script with a relative path.
- `practice.js`: Contains simple, top-level functions (e.g., `add`, `addition`, `multiply`, `word`) and console output for verification.

3) How to run and validate changes
- Open [practice.html](practice.html) in a browser, or use a lightweight server for CORS/static host: `python -m http.server` or `npx http-server`.
- Open DevTools console to see `console.log` output produced by `practice.js`.

4) Project-specific conventions and patterns
- Code is written in plain ES5/ES6 syntax at global scope (no `import`/`export` yet).
- Both function declarations (`function add() {}`) and arrow functions (`const multiply = (x,y) => {}`) are used.
- Console logging is the primary verification method; unit tests and a test harness are not present.

5) Common issues to watch for
- `practice.html` currently has a malformed `meta` viewport attribute (`width=,`) and a script tag that is missing quotes: `src= practice.js` should be `src="practice.js"`. Adjust these if you modify the page or add assets.
- Because the code runs in global scope, avoid unintentionally shadowing names or adding globals; if you add modules, explicitly migrate script to `type="module"` and add exports/imports.

6) Edit & PR guidance for AI agents
- Preserve single-file structure unless the change requires a new module; if adding a module, update `<script type="module" src="...">` and convert callers.
- Keep changes isolated and small. Validate in browser as the main verification step. Do not add unnecessary build tooling.
- For naming: follow existing camelCase and short descriptive names (e.g., `add`, `multiply`). Keep console logs minimal and helpful.

7) Suggested next steps (for human maintainers)
- Add a README with purpose and running instructions, if the project should evolve.
- Add a simple test runner or use Node-based tooling only if this repository grows beyond a demo.

If anything here is unclear or you'd like additions (e.g., test instructions, CI guidance, or refactor guidance), please tell me which areas to expand.
