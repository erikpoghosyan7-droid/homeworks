class CinemaFacade{
   #devices  = [];
   constructor(...devs){

    

   }
}

const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

console.log(cinema.watchMovie());


console.log(cinema.endMovie());
