//constructor is a default method used inside every class
class Bootcamper{
    constructor(fname,lanme,age){
        this.fname=fname;
        this.lanme=lanme;
        this.age=age;
    }
}

const zeke = new Bootcamper("zeke","kodak","24");
console.log(zeke);


class Instructor extends Bootcamper{
    constructor(fname,lanme,age,skills){
        super(fname,lanme,age);
        this.skills = skills;
    }
}

const afzal = new Instructor('mo','afzal','28','java');
console.log(afzal);

//---------X----------------------X-----------------------X-----------------


//Modern JS uses classes. Older JS used to make use off function prototyping 
{$and:[{$gt:18},{$lt:20}]}