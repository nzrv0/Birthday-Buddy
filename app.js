import { data } from "./data.js";
let peoples = document.querySelector(".peoples");
let button = document.querySelector(".clear_button");
let count = document.querySelector(".count");

let peoples_data = data;
count.innerHTML = peoples_data.length;
let data_image = peoples_data.map((e) => e.image);
let data_name = peoples_data.map((e) => e.name);
let data_age = peoples_data.map((e) => e.age);

const createElement = (data_image, data_name, data_age) => {
    for (let i = 0; i < peoples_data.length; i++) {
        let people = document.createElement("div");
        people.className = "people";
        peoples.appendChild(people);

        let image = document.createElement("IMG");
        image.className = "people_image";
        image.setAttribute("src", data_image[i]);
        people.appendChild(image);

        let people_bio = document.createElement("div");
        people_bio.className = "people_bio";
        people.appendChild(people_bio);

        let name = document.createElement("h4");
        name.className = "people_name";
        name.innerHTML = data_name[i];
        people_bio.appendChild(name);

        let age = document.createElement("p");
        age.className = "people_age";
        age.innerHTML = data_age[i];
        people_bio.appendChild(age);
    }
};
button.addEventListener("click", myFunction);
function myFunction() {
    document.querySelector(".peoples").remove();
    count.innerHTML = "0";
}
createElement(data_image, data_name, data_age);
