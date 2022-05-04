Service.Util.ScrollTo = el => document.querySelector('app').scrollTo({
    top: el.offsetTop,
    behavior: 'smooth'
})

Service.Util.Nav = '<input i0="nav" placeholder="loading...">'

document.head.appendChild(i0.element('<link rel="icon" type="image/x-icon" href="./asset/logo.PNG">'))