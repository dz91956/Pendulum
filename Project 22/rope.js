class Rope {

    constructor(body1, body2, point1, point2){

        this.point1 = point1;
        this.point2 = point2;

        var options = {
            bodyA:body1,
            bodyB:body2,
            point2:{x:this.point1, y:this.point2}
        }



    }


}