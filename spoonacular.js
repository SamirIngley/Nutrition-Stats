import axios from "axios"
import { format } from "path";
const api = "https://api.spoonacular.com/food/products/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&number=2&query="

const food = document.querySelector(".spoonsearch")

const searchProduct = async productName => {

    try {
        const response = await axios.get(`${api}${productName}`);
        output.textContent = response.data.value;
    
    } catch (error) {
        errors.textContent = "Sorry, we have no data for this product."
    }

}

const submitHandler = async e => {
    e.preventDefault();
    searchProduct(food.value);
    console.log(fodd.value);
};

format.addEventListener("submit", e => handleSubmit(e));



// function getsource(id){
//     $.ajax({
//         url:"https://api.spoonacular.com/food/products/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&query=broccoli&number=2",
//         success: function(res){
//             document.getElementById("sourceLink").innerHTML=res.sourceUrl
//             document.getElementById("sourceLink").href=res.sourceUrl
//         }
//     });
// }

// function getIngredients(q){
//     $.ajax({
//         url:"https://api.spoonacular.com/recipes/search?apiKey=&query="+q+"&number=1",
//         success: function(res){
//             document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br> ready in "+res.results[0].ingredients+" minutes" 
//             getsource(res.results[0].id)
//         }
//     });
// }
