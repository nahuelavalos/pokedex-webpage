const url = "https://pokeapi-nodejs.herokuapp.com/"
const max = 809;

// Random (Inicio)
var rdm = Math.floor(Math.random() * (max) + 1);
fetch(url + rdm)
.then(response => response.json())
.then(data => {
    console.log(data)
    buscarPokemon(data);
})
.catch(err => console.log(err))

const btnGet = document.querySelectorAll('.btn-success')
btnGet.forEach(btn => {
    btn.addEventListener('click', () => {
        fetch(url + document.getElementById("pokename").value)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const textEnter = document.querySelectorAll('.input-name')
textEnter.forEach(btn => {
    btn.addEventListener('keypress', function (e) {if (e.key === 'Enter') {
        fetch(url + document.getElementById("pokename").value)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))}
    })
})

const btnPrev = document.querySelectorAll('.prev')
btnPrev.forEach(btn => {
    btn.addEventListener('click', () => {
        var nro = parseInt(document.getElementById("card-text-id").textContent) - 1;
        fetch(url + nro)
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
        var nro = parseInt(document.getElementById("card-text-id").textContent) + 1;
        fetch(url + nro)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const btnRandom = document.querySelectorAll('.random')
btnRandom.forEach(btn => {
    btn.addEventListener('click', () => {
        var rdm = Math.floor(Math.random() * (max) + 1)
        fetch(url + rdm)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const buscarPokemon = (data) => {
    console.log(data)

    if(JSON.stringify(data)!="null") {
        document.getElementById("pokename").value = data.name.toLowerCase()

        var str = JSON.stringify(data, undefined, 4);
        document.getElementById('response').value = str;
                
        var card = document.getElementById("card-id");
        card.hidden = false;
        card.querySelector(".card-img-top").setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png");
        card.querySelector(".card-title").textContent = data.name;
        card.querySelector(".card-text").textContent = data.id;

        var cardMove = document.getElementById("card-id-2");
        cardMove.hidden = false;

        var hp = document.getElementById("pg-1");
        hp.style.width = data.base.HP/1.5 + "%";
        hp.style.backgroundColor = "yellow";
        hp.textContent = data.base.HP;
        hp.style.textAlign = "center";

        var atk = document.getElementById("pg-2");
        atk.style.width = data.base.Attack/1.5 + "%";
        atk.style.backgroundColor = "yellow";
        atk.textContent = data.base.Attack;
        atk.style.textAlign = "center";

        var def = document.getElementById("pg-3");
        def.style.width = data.base.Defense/1.5 + "%";
        def.textContent = data.base.Defense;
        def.style.textAlign = "center";

        var spatk = document.getElementById("pg-4");
        spatk.style.width = data.base["Sp. Attack"]/1.5 + "%";
        spatk.textContent = data.base["Sp. Attack"];
        spatk.style.textAlign = "center";

        var spdef = document.getElementById("pg-5");
        spdef.style.width = data.base["Sp. Defense"]/1.5 + "%";
        spdef.textContent = data.base["Sp. Defense"];
        spdef.style.textAlign = "center";

        var speed = document.getElementById("pg-6");
        speed.style.width = data.base.Speed/1.5 + "%";
        speed.textContent = data.base.Speed;
        speed.style.textAlign = "center";

        //document.querySelector(".progress-bar").style.textAlign = "center";


        if(data.type.length==1) {
            card.querySelector(".type-2").hidden = true;
        }
        else {
            card.querySelector(".type-2").hidden = false;
        }

        for(var i=0; i<data.type.length; i++) {
            console.log(data.type[i]);
            if(data.type[i] == "Normal") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Fighting") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Flying") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Poison") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ground") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Rock") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Bug") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ghost") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Steel") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Fire") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: red; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: red; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Water") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Grass") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: green; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: green; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Electric") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Psychic") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ice") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Dragon") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Dark") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: black; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: black; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Fairy") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
        }               
    }
}
