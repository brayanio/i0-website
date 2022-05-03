'home',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <section class="card">
            <div class="card-header d-flex align-items-center">
                <h1 class="card-title tls-font">i0</h1>
                <h5 class="card-subtitle mb-2 text-muted ps-2">Framework</h5>
            </div>
            <div class="card-body">
                <p class="card-text" style="max-width: 369px">The quickest full-stack framework ever made by a single man in his basement.</p>
                <a href="#download" class="card-link">Download</a>
                <a href="#documentation" class="card-link">Documentation</a>
            </div>
        </section>
    </div>
`,
async (ui, props) => {

    i0.load('nav', [
        {text: 'Documentation', href: '#documentation'},
        {text: 'Download', href: '#download'}
    ], ui.nav)

}