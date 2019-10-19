export default [

  function disableScriptTag(node){
    return node.name === 'script'
      ? Object.assign(node, {
        props: Object.assign(node.props, {
          src: ''
        }),
        children: []
      })
      : node
  },

  function disableImgSrc(node){
    return node
  },

  function escapeInineText(node){
    return node
  }

]