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

        

        var hp = document.getElementById("pg-1");
        hp.style.width = data.base.HP/1.5 + "%";
        hp.textContent = data.base.HP;
        hp.style.textAlign = "center";
        if(data.base.HP <= 40) {
            hp.style.backgroundColor = "orange";
        } else if(data.base.HP <= 80) {
            hp.style.backgroundColor = "yellow";
        } else if(data.base.HP <= 120) {
            hp.style.backgroundColor = "greenyellow";
        } else {
            hp.style.backgroundColor = "lightgreen";
        }

        var atk = document.getElementById("pg-2");
        atk.style.width = data.base.Attack/1.5 + "%";
        atk.textContent = data.base.Attack;
        atk.style.textAlign = "center";
        if(data.base.Attack <= 40) {
            atk.style.backgroundColor = "orange";
        } else if(data.base.Attack <= 80) {
            atk.style.backgroundColor = "yellow";
        } else if(data.base.Attack <= 120) {
            atk.style.backgroundColor = "greenyellow";
        } else {
            atk.style.backgroundColor = "lightgreen";
        }

        var def = document.getElementById("pg-3");
        def.style.width = data.base.Defense/1.5 + "%";
        def.textContent = data.base.Defense;
        def.style.textAlign = "center";
        if(data.base.Defense <= 40) {
            def.style.backgroundColor = "orange";
        } else if(data.base.Defense <= 80) {
            def.style.backgroundColor = "yellow";
        } else if(data.base.Defense <= 120) {
            def.style.backgroundColor = "greenyellow";
        } else {
            def.style.backgroundColor = "lightgreen";
        }

        var spatk = document.getElementById("pg-4");
        spatk.style.width = data.base["Sp. Attack"]/1.5 + "%";
        spatk.textContent = data.base["Sp. Attack"];
        spatk.style.textAlign = "center";
        if(data.base["Sp. Attack"] <= 40) {
            spatk.style.backgroundColor = "orange";
        } else if(data.base["Sp. Attack"] <= 80) {
            spatk.style.backgroundColor = "yellow";
        } else if(data.base["Sp. Attack"] <= 120) {
            spatk.style.backgroundColor = "greenyellow";
        } else {
            spatk.style.backgroundColor = "lightgreen";
        }

        var spdef = document.getElementById("pg-5");
        spdef.style.width = data.base["Sp. Defense"]/1.5 + "%";
        spdef.textContent = data.base["Sp. Defense"];
        spdef.style.textAlign = "center";
        if(data.base["Sp. Defense"] <= 40) {
            spdef.style.backgroundColor = "orange";
        } else if(data.base["Sp. Defense"] <= 80) {
            spdef.style.backgroundColor = "yellow";
        } else if(data.base["Sp. Defense"] <= 120) {
            spdef.style.backgroundColor = "greenyellow";
        } else {
            spdef.style.backgroundColor = "lightgreen";
        }

        var speed = document.getElementById("pg-6");
        speed.style.width = data.base.Speed/1.5 + "%";
        speed.textContent = data.base.Speed;
        speed.style.textAlign = "center";
        if(data.base.Speed <= 40) {
            speed.style.backgroundColor = "orange";
        } else if(data.base.Speed <= 80) {
            speed.style.backgroundColor = "yellow";
        } else if(data.base.Speed <= 120) {
            speed.style.backgroundColor = "greenyellow";
        } else {
            speed.style.backgroundColor = "lightgreen";
        }

        //var total = document.getElementById("total");
        //total.textContent = "88888"
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
