console.log("Seja bem vindo!")
  
    let myList = ["lápis", "borracha", "caderno", "estojo", "grafite"]

    console.log(`Lista do meu material escolar: ${myList}`)

  console.log("-----------------------------------------------")

    myList.unshift("sulfite")
    console.log(myList)

  console.log("-----------------------------------------------")

    myList.pop()
    console.log(myList)

  console.log("-----------------------------------------------")

    myList.push("agenda" , "durex")
    console.log(myList)

  console.log("-----------------------------------------------")

  myList.shift()
  console.log(myList)

  console.log("-----------------------------------------------")

  let numbers = [7,5,6,3,8,9,2,1,4]
  numbers.sort()
  console.log(numbers)

  console.log("-----------------------------------------------")

  let infos = [
    {
    altura: "1,60m",
    peso:"60kg",
    genero: "feminino"
  }
  ]
  
  infos.unshift({
    qualidade: "otimista"
  })
  
  console.log(infos)

  console.log("-----------------------------------------------")

  delete infos.qualidade
  console.log(infos)

  console.log(infos)  

  console.log("-----------------------------------------------")

  let cadastro = [
        {
        nome: "Ellie",
        idade:"14 anos",
        telefone:"(00) 00000-0000",
        amigos: ["Bella", "Pedro", "Gabriel","Merle"]
    },
    {
        nome: "Joel",
        idade:"56 anos",
        telefone:"(00) 00000-0000",
        amigos: ["Ellie", "Tommy", "Tess","Bill"]
    },
    {
        nome: "Tommy",
        idade:"45 anos",
        telefone:"(00) 00000-0000",
        amigos: ["Joel", "Ellie", "Sarah","Tess"]
    },
    {
        nome: "Bill",
        idade:"60 anos",
        telefone:"(00) 00000-0000",
        amigos: ["Frank", "Tess", "Joel","Ellie"]
    },
    {
        nome: "Henry",
        idade:"25 anos",
        telefone:"(00) 00000-0000",
        amigos: ["Sam", "Ellie", "Joel","Lamar"]
    },
  ]
 
  console.log(cadastro[0].amigos[0])
  console.log(cadastro[1].amigos[0])
  console.log(cadastro[2].amigos[0])
  console.log(cadastro[3].amigos[0])
  console.log(cadastro[4].amigos[0])
  
  console.log("----------------------------------------------- fim.")

