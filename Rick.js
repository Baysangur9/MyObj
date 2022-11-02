const sportСomplex = {
    name: 'SPARTA',
    location: 'Groznya',
    workingHours: 12,
    workers: 3,
    service: {
        gym: 'physicalTraining',
        swimming: 'swimming',
        bath:'steam',
        massage:'wellness',
        wrestlingGym: 'wrestling',

    },
   
}  

let complexList = {
  staff:  [
    { 
     nameComplex: 'Ayub',
     howLongWork: 0,
    },

    { 
    nameComplex: 'Adam',
    howLongWork: 0,
    },
                
    { 
    nameComplex: 'Akhmad',
    howLongWork: 0,
    },

    ],


    howMuchWork: function () {
        for(let i = 0; i < complexList.staff.length; i++){
            if (this.staff[i].howLongWork > 10){
                console.log(this.staff[i].nameComplex + 'Сегодня хорошо отработал')
            }else{
                console.log(`Имя работника: ${complexList.staff[i].nameComplex} Премия ${complexList.staff[i].howLongWork}`)
            }
        }
    },

    
    workedGym: function(index) {
       sportСomplex.service.gym -= 1
       this.staff[index].howLongWork +=5


    },
    workedSwimming: function(index){
        sportСomplex.service.swimming -= 1
        this.staff[index].howLongWork +=5


    },
    workedBath: function(index){
        sportСomplex.service.bath -= 1
        this.staff[index].howLongWork +=5


    },
    workedMassage: function(index){
        sportСomplex.service.massage -= 1
        this.staff[index].howLongWork +=5


    },
    workedWrestling: function(index){
        sportСomplex.service.wrestlingGym -= 1
       this.staff[index].howLongWork +=5


    },





}

complexList.workedGym(1)
complexList.workedMassage(1)
complexList.workedWrestling(1)
complexList.howMuchWork()
   