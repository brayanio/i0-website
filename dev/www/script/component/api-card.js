'api-card',
`
<section class="card" i0="scroll">
  <div class="card-header">
    <b class="card-title" i0="name"></b>
  </div>
  <div class="card-body">
    <p class="card-text ms-2 text-muted" i0="desc"></p>
    <pre class="card-text">
      <b i0="property" class="tls-font"></b> | <span class="text-muted ms-2" i0="returns"></span>
    </pre>
    <div i0="props" class="card-text"></div>
    <hr>
    <pre class="chroma text-center text-muted tls-font mt-4" i0="example"></pre>
  </div>
</section>
`,
(ui, props) => {
  ui.scroll.setAttribute('scroll', props.name)
  ui.name.innerText = 'i0.'+props.name
  ui.property.innerText = props.property
  ui.desc.innerText = props.desc
  ui.example.innerText = props.example
  ui.returns.innerText = props.returns

  if(props.props) props.props.forEach(p => {
    ui.props.appendChild( i0.element(`
      <div class="mb-2">
        <b>${p[0]}</b> | <span class="text-muted">${p[1]}</span>
        <br>
        <span class="ms-2">${p[2]}</span>
      </div>
    `) )
  })
}