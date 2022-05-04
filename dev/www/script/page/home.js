'home',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="row justify-content-md-center justify-content-lg-center">
            <div class="col-md-auto col-lg-auto col-md-6 col-lg-4">
                <section class="card">
                    <div class="card-header d-flex justify-content-center">
                        <img src="./asset/logo.PNG" width="128" height="128">
                    </div>
                    <div class="card-body">
                        <h1 class="card-title tls-font">i0</h1>
                        <h5 class="card-subtitle mb-2 text-muted tls-font">Framework</h5>
                        <p class="card-text" style="max-width: 369px">The JavaScript full-stack solution.</p>
                        <div class="d-flex align-items-center">
                            <a href="#download" class="card-link text-success text-decoration-none">Download</a>
                            <a href="#documentation" class="card-link btn btn-outline-success">Documentation</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
`,
async (ui, props) => {

    i0.load('nav', [
        {text: 'Documentation', href: '#documentation'},
        {text: 'Download', href: '#download'}
    ], ui.nav)

}