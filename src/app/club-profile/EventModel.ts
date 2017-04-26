export class EventModel { 
    name: string;
    loc: [number];
    members: Array<string> = new Array<string>(); 
    createTime : Date;
    clubId : string;
}