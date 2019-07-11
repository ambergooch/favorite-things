const favThing = document.querySelector("#fav-thing")
const whereToBuy = document.querySelector("#where-to-buy")

function createListComponent () {
    return `
        <p>I can purchase ${favThing.value} at ${whereToBuy.value}</p>
    `
}
document.querySelector("#save-button").addEventListener("click", () => {
    if (favThing.value === "" || whereToBuy.value === "") {
        document.querySelector("#wishlist").innerHTML += `<p>Please fill out both fields</p>`
    } else {
        document.querySelector("#wishlist").innerHTML += createListComponent()
        favThing.value = ""
        whereToBuy.value = ""
        favThing.focus()
    }
   });


