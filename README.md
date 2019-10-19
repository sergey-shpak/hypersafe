This is early POC of Hyperapp#2 vNodes escape

### Escape

```javascript
import { app } from 'hyperapp'
import { escape } from 'hypersafe'
import view from 'your/view/path'

app({
  // app initializetion
  view: escape(view, { /* escape options */ })
})
```

### Options

Hypersafe allows you to disable any escaping rule,
please take a look at 'src/tests.js' for rule names,
example:

```javascript
import { app } from 'hyperapp'
import { escape } from 'hypersafe'
import view from 'your/view/path'

app({
  // app initializetion
  view: escape(view, {
    // allows script tag
    disableScriptTag: false
  })
})
```
