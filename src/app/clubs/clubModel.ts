import { EventModel } from "app/club-profile/EventModel";

export class ClubModel { 
    _id :string;
    name : string;
    owner : string;
    loc : Array<number> = new Array<number>();
    events:Array<EventModel> = new Array<EventModel>();
    users:Array<string> = new Array<string>();   
}