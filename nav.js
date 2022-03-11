let source = "pacaf.net"
if (location.host !== source) {
    //alert("Warning! This site is not authorized to use this script! You will now be redirected to the main host website.")
    //location.replace(link)
}
/*
Link types:
0 = Regular link
1 = Dropdown
*/
let links = [
    {
        type: 'link',
        link: '#',
        txt: 'Home',
        target: 'self',
        active: true,
        current: false
    },
    {
        type: 'link',
        link: '#',
        txt: 'WiFi',
        target: 'blank',
        active: true,
        current: false
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
navLinks(links);
async function navLinks(links) {
    let li, hr, a
    links.forEach((link, index) => {
        li = document.createElement('li')
        if (link.type === 'link') {
            li.setAttribute('class', 'nav-item')
            li.innerHTML = `<a class="nav-link" href="${link.link}" target="_${link.target}">${link.txt}</a>`
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
                    a.innerText = link.txt
                    x.appendChild(a)
                    ul.appendChild(x)
                }

            });
            li.appendChild(ul)
        }
        document.getElementById('navLinksBar').appendChild(li)
    });
}
