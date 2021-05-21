//This code is just an MVP, and yet to be implemented

const [design,prog] = [
    'https://behance.net/arthurmm18',
    'https://github.com/Arthur-Matias'
]

const toggleModal = (section: 'prog'|'design'):void => {
    if (section === 'design') {
        window.open(design)
    }else{
        window.open(prog)
    }
}