import tests from './tests'

function test(node, options){
  return Array.isArray(node)
  ? node.map(n => test(n, options))
  : tests.reduce(
      (n, test) => options[test.name] === false ? n : test(n),
      Object.assign(node, {
        children: node.children.map(function(n){
          return test(n, options)
        })
      })
    )
}

export function escape(vdom, options){
  var opt = options || {}
  return typeof vdom === 'function'
    ? function view(s){ return test(vdom(s), opt) }
    : test(vdom, opt)
}