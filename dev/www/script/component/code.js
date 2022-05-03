'code',
`
    <a i0="link" class="pop-container">
       <code class="cmd" i0="code"></code>
    </a>
`,
(ui, props) => {
    ui.code.innerText = props
    const input = i0.element(`<input value="${props}" class="transparent">`).children[0]

    ui.link.onclick = (e) => {
        e.preventDefault()
        ui.link.appendChild(input)
        setTimeout(() => {
            input.focus()
            input.select()
            try{ 
                document.execCommand('copy')
                let pop = i0.load('pop', 'Copied').children[0]
                ui.link.appendChild(pop)
                setTimeout(() => {
                    pop.parentNode.removeChild(pop)
                }, 2950)
            } catch(e){}
            ui.link.removeChild(input)
        }, 0)
    }
}