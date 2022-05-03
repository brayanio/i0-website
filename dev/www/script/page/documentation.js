'documentation',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card doc-nav overflow-auto" i0="sideNav">
                    <div class="card-header">
                        <h1 class="card-title">Documentation</h1>
                    </div>
                    <div class="card-body">
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Navigation
                                    </button>
                                </div>
                                <div class="accordion-collapse collapse show" id="collapseOne" i0="accordian" data-bs-parent="#accordion">
                                    <div class="d-flex flex-column text-start" i0="list">
                                        <div><button class="btn btn-link text-decoration-none" to="obj">i0.obj</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="load">i0.load</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="element">i0.element</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="router">i0.router</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="toRoute">i0.toRoute</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="fetch">i0.fetch</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="target">i0.target</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="broadcast">i0.broadcast</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="onbroadcast">i0.onbroadcast</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="emptybroadcast">i0.emptybroadcast</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="guid">i0.guid</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="env">i0.env</button></div>
                                        <div><button class="btn btn-link text-decoration-none" to="deleteEnv">i0.deleteEnv</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
            <div i0="cards" class="d-grid gap-3 col-md-8"></div>
            <br>
        </div>
        <br>
    </div>
`,
(ui, props) => {

    i0.load('nav', [
        {text: 'Download', href: '#download'}
    ], ui.nav)

    ui.list.childNodes.forEach(el => {
        if(el && el.getAttribute){
            const sectionId = el.children[0].getAttribute('to')
            el.onclick = () => {
                ui.accordian.classList.remove('show')
                setTimeout(
                    () => Service.Util.ScrollTo( ui.cards.querySelector(`[scroll=${sectionId}]`) ),
                    0
                )
            }
        }
    })

    ui.sideNav.style['max-height'] = Math.floor(innerHeight * .86) + 'px'

    setTimeout( () =>
        document.querySelector('app').onscroll = () => {
            if(innerWidth > 800){
                ui.sideNav.style.top = document.querySelector('app').scrollTop + 'px'
            }
        },
        0
    )

    Service.Import.Docs().forEach(card => ui.cards.appendChild(i0.load('api-card', card)))

}