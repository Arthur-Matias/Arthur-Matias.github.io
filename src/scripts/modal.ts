const [design,prog]:string[] = [
    'https://behance.net/arthurmm18',
    'https://github.com/Arthur-Matias'
]

function toggleModal(section: "design"| "prog"){
    if (section === 'design') {
        window.open(design)
    }else{
        window.open(prog)
    }
}