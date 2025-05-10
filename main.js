import { translations } from "./translation.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", () => {
    const langButtons = d.querySelectorAll(".lang-btn");
    const elementToTranslate = d.querySelectorAll("[data-key]");

    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            changeLanguage(selectedLang);
        });
    });
    
    function changeLanguage(lang){
        elementToTranslate.forEach((element) =>{
            const key = element.getAttribute("data-key");
            const translation = translations[lang]?.[key.split(".")[0]]?.[key.split(".")[1]];
    
            if(translation){
                const priceSpan = element.querySelector(".price");

                if(priceSpan){
                    element.firstChild.textContent  = translation + ":";
                }else{
                    element.textContent = translation;
                }
        }
    });
    }
});

