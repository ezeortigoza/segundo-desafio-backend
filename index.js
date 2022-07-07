const Contenedor = require('./Contenedor.js');
//Importar la clase, no significa instanciarla


const service = new Contenedor();
const enviroment = async() =>{
    console.log("Getting articles");
  let pets =  await service.getAll();
  console.log(pets);

 console.log('adding article');
 let article = {
    title:'Guantes de boxeo',
    price: 100,
    url: 'https://http2.mlstatic.com/D_NQ_NP_734814-MLA50006953088_052022-O.webp'
 }
 await service.save(article);
 await service.getById(article);
 await service.deleteById((5));
 await service.deleteAll(article);

}

enviroment();

