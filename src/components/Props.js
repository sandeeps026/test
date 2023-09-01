import React, {memo} from 'react';

export default function  Props({name}) {
    console.log("props component reloaded");
   return <div>
    {name}
   </div>
}