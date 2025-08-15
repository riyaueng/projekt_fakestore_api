import "./style.css"
import type { TProducts } from "./types/TProducts"

// ? -- Produkte URL-LINK = https://fakestoreapi.com/products --
// ? -- Kategorien URL-LINK = https://https://fakestoreapi.com/products/categories --

const api_url_products = "https://fakestoreapi.com/products"
const api_url_categories = "https://fakestoreapi.com/products/categories"
const outputProducts = document.querySelector(".section_products_overview") as HTMLElement
const outputCategories = document.querySelector(".output_categories") as HTMLDivElement
const sortElement = document.querySelector("#sortfield") as HTMLSelectElement

// const electronicsBtn = document.querySelector("#btn_electronics") as HTMLButtonElement
// const jeweleryBtn = document.querySelector("#btn_jewelery") as HTMLButtonElement
// const menClothingBtn = document.querySelector("#btn_men") as HTMLButtonElement
// const womenClothingBtn = document.querySelector("#btn_women") as HTMLButtonElement

// # ------ Produkte aus der API auflisten lassen -------

function listProducts(): TProducts[] {
  let productArray: TProducts[] = []
  fetch(api_url_products)
    .then((resp: Response) => {
      console.log(resp)
      if (!resp.ok) {
        console.error("Produktliste wird nicht angezeigt")
      }
      return resp.json()
    })
    .then((products: TProducts[]) => {
      products.forEach((product: TProducts) => {
        productArray.push(product)
      })
    })
    .catch((error: Error) => {
      console.log(error)
    })
    .finally(() => {
      console.log("Alle Produkte sind gelistet.")
      printProducts(productArray)
    })
  return productArray
}

const listedProducts: TProducts[] = listProducts()

// # ----- Produkte auf der Startseite anzeigen lasssen -----

let productlist = document.createElement("div") as HTMLDivElement

function printProducts(products: TProducts[]): void {
  outputProducts.innerHTML = ""

  products.forEach((product: TProducts) => {
    // * ------- Produkt-Boxen ausgeben --------

    productlist.innerHTML = `
      <div class="product_box">
      <div class="div_product_img">
      <img src="${product.image}" alt="${product.image}">
      </div>
      <h2>${product.title}</h2>
      <div class="wrapper_price_cart">
      <p>${product.price} €</p>
      <button class="add_cart_btn">Add to cart</button>
      </div>
      </div>`
    outputProducts.innerHTML += productlist.innerHTML
  })
}
printProducts(listedProducts)

// # ------ Kategorien aus der API auflisten lassen -------

function getCategories(): void {
  fetch(api_url_categories)
    .then((resp: Response) => {
      console.log(resp)
      if (!resp.ok) {
        console.error("Kategorien werden nicht angezeigt.")
      }
      return resp.json()
    })
    .then((categories: string[]) => {
      printCategories(categories)
    })
    .catch((error: Error) => {
      console.log(error)
    })
    .finally(() => {
      console.log("Kategorien werden angezeigt.")
    })
}

getCategories()

// ! ----- Warum ist das Element im Array undefined?? -----

// # ----- Kategorien anzeigen lassen -----

function printCategories(categories: string[]): void {
  outputCategories.innerHTML = ""

  categories.forEach((categorie: string) => {
    let categorieBtn = document.createElement("button") as HTMLButtonElement
    categorieBtn.textContent = `${categorie}`
    categorieBtn.className = "filter_btn"
    outputCategories.appendChild(categorieBtn)
    categorieBtn.addEventListener("click", () => {
      if (categorieBtn.textContent === "electronics") {
        printProducts(filterElectronics())
        console.log("electronics")
      } else if (categorieBtn.textContent === "jewelery") {
        console.log("jewelery")
        printProducts(filterJewelery())
      } else if (categorieBtn.textContent === "men's clothing") {
        console.log("men's clothing")
        printProducts(filterMenClothing())
      } else if (categorieBtn.textContent === "women's clothing") {
        console.log("women's clothing")
        printProducts(filterWomenClothing())
      }
    })
  })
}

// # ----- Mit Kategorie: Electronics filtern ------

function filterElectronics(): TProducts[] {
  const copyListedProducts = [...listedProducts]
  return copyListedProducts.filter((product) => {
    return product.category.includes("electronics")
  })
}

// # ----- Mit Kategorie: Jewelery filtern ------

function filterJewelery(): TProducts[] {
  return listedProducts.filter((product) => {
    return product.category.includes("jewelery")
  })
}

// # ----- Mit Kategorie: Men's clothing filtern ------

function filterMenClothing(): TProducts[] {
  return listedProducts.filter((product) => {
    return product.category.includes("men's clothing") && !product.category.includes("wo")
  })
}

// # ----- Mit Kategorie: Women's clothing filtern ------

function filterWomenClothing(): TProducts[] {
  return listedProducts.filter((product) => {
    return product.category.includes("women's clothing")
  })
}

// # ----- Preis aufsteigend und absteigend sortieren ------

sortElement.addEventListener("change", () => {
  const selectValue = sortElement.value.trim()
  const copyListedProducts = [...listedProducts]
  if (selectValue === "priceup") {
    copyListedProducts.sort((productA: TProducts, productB: TProducts) => productB.price - productA.price)
  } else if (selectValue === "pricedown") {
    copyListedProducts.sort((productA: TProducts, productB: TProducts) => productA.price - productB.price)
  } else if (selectValue === "rating") {
    copyListedProducts.sort((productA: TProducts, productB: TProducts) => productB.rating.rate - productA.rating.rate)
  }
  printProducts(copyListedProducts)
})

// # --------- Mit Searchfield suchen und finden ----------

const searchInput = document.querySelector("#searchfield") as HTMLInputElement

function searchProducts(input: string) {
  const inputLowerCase = input.toLowerCase()
  const copyListedProducts = [...listedProducts]
  return copyListedProducts.filter((product: TProducts) => product.title.toLowerCase().includes(inputLowerCase))
}

searchInput.addEventListener("keyup", () => {
  const inputValue = searchInput.value
  const searchResult = searchProducts(inputValue)
  printProducts(searchResult)
  console.log(searchResult)
})
