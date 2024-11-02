document.body.innerHTML += "<h2> Vítejte na Fakultě Informačních Technologií ČVUT </h2>"

let krestniJmeno = prompt("Zadejte křestní jméno (bez diakritiky):")
let prijmeni = prompt("Zadejte příjmení (bez diakritiky):")

krestniJmeno = krestniJmeno.trim().toLowerCase()
prijmeni = prijmeni.trim().toLowerCase()

let prvniCastMailu = prijmeni.slice(0, 5)
let druhaCastMailu = krestniJmeno.slice(0, 3)

const tretiCastMailu = "@fit.cvut.cz"

document.body.innerHTML += "<P> Vaše emailová adresa je: " + prvniCastMailu + druhaCastMailu + tretiCastMailu + "</p>"

