Service.Util.ScrollTo = el => document.querySelector('app').scrollTo({
    top: el.offsetTop,
    behavior: 'smooth'
})

Service.Util.Nav = '<input i0="nav" placeholder="loading...">'