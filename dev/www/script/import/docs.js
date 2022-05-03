export default [
  {
      name: 'obj',
      property: 'i0.obj(id, html, onInit?)',
      returns: 'undefined',
      desc: 'Used to create components.',
      example: "i0.obj('example', '<button>Example</button>')",
      props: [
          ['id', 'string', 'Use this id when loading a new component.'],
          ['html', 'string', 'The ui of your component.'],
          ['onInit', 'function', 'This function is ran when a component is created.']
      ]
  },{
      name: 'load',
      property: 'i0.load(id, props?, el?)',
      returns: 'HTMLElement',
      desc: 'Initiates a component and returns the HTMLElement.',
      example: "document.body.appendChild( i0.load('button') )",
      props: [
          ['id', 'string', 'Which component to load.'],
          ['props', 'object', 'Passed properties to the component.'],
          ['el', 'HTMLElement', 'Replace the following element with this component.'],
      ]
  },{
      name: 'element',
      property: 'i0.element(html, onInit?)',
      returns: 'HTMLElement',
      desc: 'Create a component on the fly and return the HTMLElement.',
      example: `let button = i0.element('<button>Example</button>') \n document.body.appendChild(button)`,
      props: [
          ['html', 'string', 'The html of your component.'],
          ['onInit', 'function', 'This function is ran when a component is created.']
      ]
  },{
      name: 'router',
      property: 'i0.router(routes)',
      returns: 'undefined',
      desc: "Start i0's routing framework.",
      example: "i0.router({'': 'home', '#': 'home', '#home': 'home'})",
      props: [
          ['routes', 'object', 'A map of location hash (key), component ID (value) pairs.']
      ]
  },{
      name: 'toRoute',
      property: 'i0.toRoute(route, props?)',
      returns: 'undefined',
      desc: "Go to specific route and load (or reload) it.",
      example: "i0.toRoute('#home')",
      props: [
          ['route', 'string', 'Set the location hash.'],
          ['props', 'object', 'Pass props to the page component.']
      ]
  },{
      name: 'fetch',
      property: 'i0.fetch(path)',
      returns: 'Promise',
      desc: "Fetch data from the backend.",
      example: "let user = await i0.fetch('user')",
      props: [
          ['path', 'string', 'Which server route to call data from.']
      ]
  },{
      name: 'target',
      property: 'i0.target(path)',
      returns: 'undefined',
      desc: "Set the target of your fetch (defaults to 'https://localhost:4200').",
      example: `i0.target('https://localhost:4200') \n let e = await i0.fetch('...')`,
      props: [
          ['path', 'string', 'Set the path of your server.']
      ]
  },{
      name: 'onbroadcast',
      property: 'i0.onbroadcast(id, fn)',
      returns: 'undefined',
      desc: "Setup a broadcast reciever with an id and a function.",
      example: "i0.onbroadcast('modal-open', modal.open)",
      props: [
          ['id', 'string', 'The name of your broadcast channel.'],
          ['fn', 'function', 'Add a function to be ran when this broadcast is called.']
      ]
  },{
      name: 'broadcast',
      property: 'i0.broadcast(id, e1?, e2?, e3?, ...?)',
      returns: 'undefined',
      desc: "Run a broadcast with the specified props.",
      example: "i0.broadcast('modal-open')",
      props: [
          ['id', 'string', 'The name of your broadcast channel.'],
          ['e', 'any', 'Any props to pass to the functions being ran.']
      ]
  },{
      name: 'emptybroadcast',
      property: 'i0.emptybroadcast(id)',
      returns: 'undefined',
      desc: "Remove all broadcast functions for an id.",
      example: "i0.emptybroadcast('modal-open')",
      props: [
          ['id', 'string', 'The name of your broadcast channel.']
      ]
  },{
      name: 'guid',
      property: 'i0.guid()',
      returns: 'string',
      desc: "Returns a guid (generated unique id).",
      example: "const id = i0.guid()"
  },{
      name: 'env',
      property: 'i0.env(getter, setter?)',
      returns: 'any',
      desc: "Store data in i0's cache and access it with i0.",
      example: `i0.env('state', 'loggedin') \n if(i0.env('state') === 'loggedin') return true`,
      props: [
          ['getter', 'string', 'The name of your env variable.'],
          ['setter', 'any', 'Set the value of your env variable.']
      ]
  },{
      name: 'deleteEnv',
      property: 'i0.deleteEnv(getter)',
      returns: 'any',
      desc: "Remove stored data.",
      example: "i0.deleteEnv('state')",
      props: [
          ['getter', 'string', 'The name of your env variable.']
      ]
  }
]