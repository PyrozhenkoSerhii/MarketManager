export class Strategy{
    _id:String;
    project:String;
    user:String;

    name:String;
    description:String;
    duration:String;
    timeCompleted:String;

    trackingPoint:String; //sales or peoples
    initialData:String; // initial number of peoples/sales
    progress:Object; //the collection of points with progress {time:data}
    iotTech:Object; //the collection of ids referred to IoTs that are used in the project

    type:String; //advertisement/environment/promotions
    parameters:Object; //the collection of parameters what was changed in the strategy {nameOfParameter:value}

    isActive:Boolean;
    createdDate:Date;
}