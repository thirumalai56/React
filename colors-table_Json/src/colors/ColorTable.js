import React, { useState } from 'react';
import  colors from '../data/colors_data';
import './table.css';

import columnMappings from '../constants/ColumnMappings';
/*
export default function ColorTable(){
    console.log(colors);
    const tableRows = colors.map(data=>{
        let columnValues = [...columnMappings.values()];
      var columnTd=   columnValues.map(value=>
            <td>{data[value]}</td>
        );
      
    return (<tr>{columnTd}</tr>);
       
    //   return <tr><td>Welcome</td><td>Welcome</td></tr>;
    });
   // console.log("++"+tableRows);
//colors.map(value=>console.log(value));
return (
     <table><caption>256 Colors - Cheat Sheet - Xterm, HEX, RGB, HSL</caption>
     <thead><tr><th>Display</th><th>Xterm Number</th><th>Xterm Name</th><th>HEX</th><th>RGB</th>
     <th>HSL</th></tr></thead>
     <tbody>{tableRows}</tbody>
     </table>);


}*/
export default function ColorTable(){
    const [searchTerm,setSearchTerm] = useState(''); 
    console.log(colors);

    const tableRows = colors.filter(data=>{
      if(searchTerm == '')
          return data;     
      if(data.name.toLowerCase().includes(searchTerm.toLowerCase()))
           return data;
        
    }) 
                            .map(data=>{
      
       var columnTd = [];
       columnMappings.forEach((value,key)=>{
          let column = ""; 
			if(value==="rgb")
			  column = <td>rgb({data[value]['r']}+{data[value]['g']}+{data[value]['b']})</td>;
			else if(value==='hsl')
			  column = <td>hsl({data[value]['h']}+{data[value]['s']}%+{data[value]['l']}%)</td>;  
			else if(key ==='HEX')
			  column = <td>{data[value]}</td>;
			else if(value ==='hexString')
			  column = <td style={{backgroundColor:data[value]}}></td>;
			  
			else
			  column = <td>{data[value]}</td>;
          columnTd = [...columnTd,column];
       })
    return (<tr>{columnTd}</tr>);
       
    //   return <tr><td>Welcome</td><td>Welcome</td></tr>;
    });
   // console.log("++"+tableRows);
//colors.map(value=>console.log(value));
return (
     <div>
       <label> XtermName </label> <input type="text" onChange = {(event)=>{setSearchTerm(event.target.value)}}/>
     <table><caption><h1>256 Colors - Cheat Sheet - Xterm, HEX, RGB, HSL</h1></caption>
     <thead><tr><th>Display</th><th>Xterm Number</th><th>Xterm Name</th><th>HEX</th><th>RGB</th>
     <th>HSL</th></tr></thead>
     <tbody>{tableRows}</tbody>
     </table>
     </div>);
  }
