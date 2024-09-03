function copyAnimalsToMammals() {
    const animalDivs = document.querySelectorAll(".all-animals .animal")
    const mammalSection = document.querySelector("#only-mammals")
    for (let animalDiv of animalDivs) {
        const isMammal = animalDiv.querySelector(".mammal-value")?.innerHTML == 'true'
        if (isMammal) {
            // const mammal = animalDiv.cloneNode(true) // deep: true clones sub tree
            mammalSection.appendChild(animalDiv)
        }
    }
}
copyAnimalsToMammals()