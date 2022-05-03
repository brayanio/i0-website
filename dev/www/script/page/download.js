'download',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">Download and Run</h1>
            </div>
            <div class="card-body">
                <ol class="d-grid gap-3 card-text">
                    <li>Run cmd <input i0="dev"></li>
                    <li>Navigate to where you want to create your i0 project in your terminal</li>
                    <li>Run cmd <input i0="dev2"></li>
                    <li>Navigate to the new project's dev folder in your terminal</li>
                    <li>To build your project run cmd: <input i0="dev3"></li>
                    <li>The first time you build your project, you will need to install node modules with the next command</li>
                    <li>Run cmd <input i0="dev4"></li>
                    <li>Build and run your project with the next command</li>
                    <li>Run cmd <input i0="dev5"></li>
                </ol>
            </div>
        </div>
    </div>
`,
(ui, props) => {

    i0.load('nav', [
        {text: 'Documentation', href: '#documentation'}
    ], ui.nav)

    i0.load('code', 'npm i -g i0dev', ui.dev)
    i0.load('code', 'i0 project project-name', ui.dev2)
    i0.load('code', 'i0 build', ui.dev3)
    i0.load('code', 'i0 install', ui.dev4)
    i0.load('code', 'i0 refresh', ui.dev5)

}