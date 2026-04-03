"use client";

import { eventNames } from "process";
import { useState } from "react";

export default function MultiStepForm(){
const [fromData, setFormData]=useState({
    eventNames: "",
    eventType: "",
    date: "",
    location:"",
    venue: "",
    hiringFor : "",
    details :{},
});
return(
    <div>
        <h2>Create Requirement</h2>
       
        <input name="eventName"
        placeholder="Event Name" />

         <input name="eventType"
        placeholder="Event Type" />

         <input name="date"
        placeholder="Date" />
    </div>

);
}