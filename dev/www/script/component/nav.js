'nav',
`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="nav-wrapper container">
        <a href="#" class="navbar-brand tls-font">i0</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav" i0="list"></ul>
        </div>
    </div>
</nav>
`,
(ui, props) => {
    props.forEach(link => {
        ui.list.appendChild(
            i0.element(`<li class="nav-item tls-font"><a href="${link.href}" class="nav-link">${link.text}</a></li>`)
        )
    })
}