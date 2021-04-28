const url = "https://pokeapi-nodejs.herokuapp.com/"

var rdm = Math.floor(Math.random() * (809 - 1 + 1) + 1);
console.log(rdm);

fetch("https://pokeapi-nodejs.herokuapp.com/" + rdm)
.then(response => response.json())
.then(data => {
    console.log(data)
    buscarPokemon(data);
})
.catch(err => console.log(err))

document.getElementById("pokename").value = "bulbasaur"



    const btnAgregar = document.querySelectorAll('.btn-success')
    btnAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            fetch(url + document.getElementById("pokename").value)
            .then(response => response.json())
            .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
        })
    })

    const btnNext = document.querySelectorAll('.next')
    btnNext.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("holaaaaaa");
            console.log(url);
            console.log(parseInt(document.getElementById("card-text-id").textContent) + 1);
            var aux = parseInt(document.getElementById("card-text-id").textContent) + 1;
            fetch(url + aux)
            .then(response => response.json())
            .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
        })
    })

    const btnPrev = document.querySelectorAll('.prev')
    btnPrev.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("holaaaaaa");
            console.log(url);
            console.log(parseInt(document.getElementById("card-text-id").textContent) - 1);
            var aux = parseInt(document.getElementById("card-text-id").textContent) - 1;
            fetch(url + aux)
            .then(response => response.json())
            .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
        })
    })

    const buscarPokemon = (data) => {
        
                console.log(data)

                if(JSON.stringify(data)!="null"){
                    

                //document.getElementById("response").value = data
                
                //var ugly = document.getElementById('response').value;
                //var obj = JSON.parse(ugly);
                //var pretty = JSON.stringify(obj, undefined, 4);
                //document.getElementById('response').value = pretty;

                var str = JSON.stringify(data, undefined, 4);
                // display pretty printed object in text area:
                document.getElementById('response').value = str;
                
                var card = document.getElementById("card-id");
                card.hidden = false;
                card.querySelector(".card-img-top").setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png");
                card.querySelector(".card-title").textContent = data.name;
                card.querySelector(".card-text").textContent = data.id;

                if(data.type.length==1) {
                    card.querySelector(".type-2").hidden = true;
                }
                else {
                    card.querySelector(".type-2").hidden = false;
                }
                for(var i=0; i<data.type.length; i++) {
                    console.log(data.type[i]);
                    if(data.type[i] == "Normal") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Fighting") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Flying") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Poison") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Ground") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Rock") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Bug") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Ghost") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Steel") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Fire") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: red; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: red; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Water") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Grass") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: green; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: green; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Electric") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Psychic") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Ice") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Dragon") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Dark") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: black; color: white");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: black; color: white");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                    if(data.type[i] == "Fairy") {
                        if(i==0){
                            card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                            card.querySelector(".type-1").textContent = data.type[i];
                        } else {
                            card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                            card.querySelector(".type-2").textContent = data.type[i];
                        }  
                    }
                }

                document.getElementById("pokename").value = data.name.toLowerCase()
                
                //card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: red");

                /*
                card.querySelector(".progress-bar-1").style.width = data.base.HP/2.55 + "%";
                card.querySelector(".progress-bar-1").textContent = "HP: " + data.base.HP;
                card.querySelector(".progress-bar-1").setAttribute("style", "opacity: .75; filter: alpha(opacity=75)");
                card.querySelector(".progress-bar-2").style.width = data.base.Attack/2.55 + "%";
                card.querySelector(".progress-bar-2").textContent = "Attack: " + data.base.Attack;
                card.querySelector(".progress-bar-3").style.width = data.base.Defense/2.55 + "%";
                card.querySelector(".progress-bar-3").textContent = "Defense: " + data.base.Defense;
                card.querySelector(".progress-bar-4").style.width = data.base["Sp. Attack"]/2.55 + "%";
                card.querySelector(".progress-bar-4").textContent = "Sp. Attack: " + data.base["Sp. Attack"];
                card.querySelector(".progress-bar-5").style.width = data.base["Sp. Defense"]/2.55 + "%";
                card.querySelector(".progress-bar-5").textContent = "HP: " + data.base["Sp. Defense"];
                card.querySelector(".progress-bar-6").style.width = data.base.Speed/2.55 + "%";
                card.querySelector(".progress-bar-6").textContent = "Speed: " + data.base.Speed;
                */        
            }}
