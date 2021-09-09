const changeTheme = () => {
    const currentBKTheme = document.getElementsByTagName("body")[0];
    const card_TOP = document.getElementsByClassName("card-interface");
    const card_BOTTOM = document.getElementsByClassName("card-bottom-interface");
    const top_background = document.getElementsByClassName("top-background")[0];
    let card_TOP_className = card_TOP[0].className;
    let card_BOTTOM_className = card_BOTTOM[0].className;
    if(currentBKTheme.className == "light"){
        
        for(let i = 0; i<card_TOP.length; i++){
            card_TOP_className = card_TOP_className.replace(/\b(light-card)\b/g,"dark-card");
            card_TOP[i].classList = card_TOP_className;
        }
        for(let i = 0; i<card_BOTTOM.length; i++){
           card_BOTTOM_className = card_BOTTOM_className.replace(/\b(light-card)\b/g,"dark-card");
           card_BOTTOM[i].classList = card_BOTTOM_className;
        }
        currentBKTheme.classList = "dark";
        top_background.classList = "top-background dark-top-bk"
    }
    else{
        for(let i = 0; i<card_TOP.length; i++){
            card_TOP_className = card_TOP_className.replace(/\b(dark-card)\b/g,"light-card");
            card_TOP[i].classList = card_TOP_className;
        }
        for(let i = 0; i<card_BOTTOM.length; i++){
            card_BOTTOM_className = card_BOTTOM_className.replace(/\b(dark-card)\b/g,"light-card");
            card_BOTTOM[i].classList = card_BOTTOM_className;
        }        
        currentBKTheme.classList = "light";
        top_background.classList = "top-background light-top-bk"
    }
}
const switchAnimation = () => {
    const switchComponent = document.getElementsByClassName("switch-component")[0];
    const changeButtonBackground = document.getElementsByClassName("change-theme")[0];
    
    if(switchComponent.classList == "switch-component on"){
        switchComponent.className = "switch-component off";
        changeButtonBackground.className = "change-theme button-light";
    }else{
        switchComponent.className = "switch-component on";
        changeButtonBackground.className = "change-theme button-dark";
    }
}