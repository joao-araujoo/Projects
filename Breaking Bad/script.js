const chemicalElements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
]

const chemicalElementsOrdered = chemicalElements.sort((a, b) => a.length - b.length) 
const alertModal = document.querySelector('.alert')

const findChemicalElement = (title) => {
    const normalizedTitle = title.toLowerCase();
    let htmlTitleElement = '';

    for (const element of chemicalElementsOrdered) {
        if (normalizedTitle.startsWith(element.toLowerCase())) {
            htmlTitleElement = `
                <h1> 
                    <span class="element-background">${element}</span>${title.substring(element.length)} 
                </h1>`;
        }
    }

    return htmlTitleElement || false;
}

document.getElementById('breakify-button').addEventListener('click', () => {
    const title = document.querySelector('.title')
    title.innerHTML = ''

    const firstTitle = document.getElementById('first-title').value
    const secondTitle = document.getElementById('second-title').value

    const firstTitleFormated = findChemicalElement(firstTitle)
    const secondTitleFormated = findChemicalElement(secondTitle)

    if (!firstTitleFormated || !secondTitleFormated) {
        alertModal.classList.add('hidden')
        setTimeout(() => {
            alertModal.classList.remove('hidden')
        }, 2 * 1000)
        return
    }

    title.innerHTML += firstTitleFormated
    title.innerHTML += secondTitleFormated
})
