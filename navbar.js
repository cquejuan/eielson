let source = "pacaf.net"
if (location.host !== source) {
    //alert("Warning! This site is not authorized to use this script! You will now be redirected to the main host website.")
    //location.replace(link)
}
//Navbar links
let links = [
    {
        type: 'link',
        link: '#home',
        txt: 'Home',
        active: true,
        current: false
    },
    {
        type: 'link',
        link: '#processing',
        txt: 'In/Out Processing',
        active: true,
        current: false
    },
    {
        type: 'link',
        link: '#',
        txt: 'Career Development'
    },
    {
        type: 'link',
        link: '#dorms',
        txt: 'Dorm Resident'
    },
    {
        type: 'dropdown',
        link: '#',
        txt: 'Internet',
        active: true,
        links: [
            {
                type: 'link',
                txt: 'Internet Now',
                link: 'https://google.com'
            },
            {
                type: 'div'
            },
            {
                type: 'link',
                txt: 'GCI',
                link: 'https://google.com'
            }
        ]
    }
]
buildNav();
function scanLink(link, target){
    let url = link
    if(url.startsWith('.') || url.startsWith('/') || url.startsWith('#') || url.startsWith('?')){
        if(target === undefined){
            target = '_self'
        }
    }else{
        try{
            url = new URL(url)
        }catch{
            console.log('Failed to create link.')
            return;
        }
        if(url.host !== location.lost){
            if(target === undefined){
                target = '_blank'
            }
        }
    }
    return target;
}
async function navLinks(links) {
    let li, hr, a
    links.forEach((link, index) => {
        li = document.createElement('li')
        if (link.type === 'link') {
            link.target = scanLink(link.link, link.target)
            li.setAttribute('class', 'nav-item')
            li.innerHTML = `<a class="nav-link" href="${link.link}" target="${link.target}">${link.txt}</a>`
        } else if (link.type === 'dropdown') {
            li.setAttribute('class', 'nav-item dropdown')
            li.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown${index}" role="button" data-bs-toggle="dropdown" aria-expanded="false">${link.txt}</a>`
            let ul = document.createElement('ul')
            ul.setAttribute('class', 'dropdown-menu dropdown-menu-dark')
            ul.setAttribute('aria-labelledby', `offcanvasNavbarDropdown${index}`)
            link.links.forEach(link => {
                if (link.type === 'div') {
                    x = document.createElement('li')
                    hr = document.createElement('hr')
                    hr.setAttribute('class', 'dropdown-divider')
                    x.appendChild(hr)
                    ul.appendChild(x)
                } else {
                    x = document.createElement('li')
                    a = document.createElement('a')
                    a.setAttribute('class', 'dropdown-item')
                    a.setAttribute('href', link.link)
                    link.target = scanLink(link.link, link.target)
                    a.setAttribute('target', link.target)
                    a.innerText = link.txt
                    x.appendChild(a)
                    ul.appendChild(x)
                }

            });
            li.appendChild(ul)
        }
        document.getElementById('navbarLinks').appendChild(li)
    });
}
function buildNav(){
    let a, b, c, d, e, f
    a = document.getElementById('head-navbar')
    a.setAttribute('class', 'navbar navbar-dark navbar-expand-lg bg-dark fixed-top')
    b = document.createElement('div')
    b.setAttribute('class', 'container-fluid')
    a.appendChild(b)
    a = a.firstChild

    b = document.createElement('button')
    b.setAttribute('class', 'navbar-toggler')
    b.setAttribute('type', 'button')
    b.setAttribute('data-bs-toggle', 'offcanvas')
    b.setAttribute('data-bs-target', '#offcanvasNavbar')
    b.setAttribute('aria-controls', 'offcanvasNavbar')
    c = document.createElement('span')
    c.setAttribute('class', 'navbar-toggler-icon')
    b.appendChild(c)
    a.appendChild(b)

    b = document.createElement('a')
    b.setAttribute('class', 'navbar-brand')
    b.setAttribute('href', '#')
    b.innerText = 'Offcanvas navbar'
    a.appendChild(b)

    b = document.createElement('div')
    b.setAttribute('class', 'offcanvas offcanvas-start bg-dark')
    b.setAttribute('tabindex', '-1')
    b.setAttribute('id', 'offcanvasNavbar')
    b.setAttribute('aria-labelledby', 'offcanvasNavbarLabel')

    c = document.createElement('div')
    c.setAttribute('class', 'offcanvas-header')
    d = document.createElement('h5')
    d.setAttribute('class', 'offcanvas-title text-light')
    d.setAttribute('id', 'offcanvasNavbarLabel')
    d.innerText = 'Offcanvas'
    c.appendChild(d)
    d = document.createElement('button')
    d.setAttribute('type', 'button')
    d.setAttribute('class', 'btn-close btn-close-white text-reset')
    d.setAttribute('data-bs-dismiss', 'offcanvas')
    d.setAttribute('aria-label', 'Close')
    c.appendChild(d)
    b.appendChild(c)

    c = document.createElement('div')
    c.setAttribute('class', 'offcanvas-body')

    d = document.createElement('ul')
    d.setAttribute('class', 'navbar-nav justify-content-end flex-grow-1 pe-3')
    d.setAttribute('id', 'navbarLinks')
    c.appendChild(d)

    d = document.createElement('form')
    d.setAttribute('class', 'd-flex')
    e = document.createElement('input')
    e.setAttribute('class', 'form-control me-2')
    e.setAttribute('type', 'search')
    e.setAttribute('placeholder', 'Search')
    e.setAttribute('aria-label', 'Search')
    d.appendChild(e)
    e = document.createElement('button')
    e.setAttribute('class', 'btn btn-outline-light btn-dark')
    e.setAttribute('type', 'submit')
    e.innerText = 'Search'
    d.appendChild(e)
    c.appendChild(d)
    b.appendChild(c)
    a.appendChild(b)
    navLinks(links)
}
let navbar = `
<nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" id="head-navbar">
<div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-light" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="navbarLinks"></ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light btn-dark" type="submit">Search</button>
            </form>
        </div>
    </div>
</div>
</nav>
`
/*
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" id="head-navbar">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Offcanvas navbar</a>
                <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-light" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="navbarLinks"></ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-light btn-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
*/