# SW Concrete and Construction: frontend

```
sw-concrete-site/
├── index.html        structure and content
├── css/style.css     colours, layout, animation
├── js/script.js      scroll effects
└── images/logo.jpg   the logo
```
Run it: open the folder in VS Code, install "Live Server", right-click index.html, "Open with Live Server".

Edit before sending to the client: replace the [bracketed] placeholders (phone, email, company story, project photos).

Moving it into Django later: html goes in templates/, css/js/images go in static/. Avoid writing curly-brace percent tags inside HTML comments, because Django still reads them.
