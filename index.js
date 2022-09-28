import React from "react"
import ReactDom from "react-dom"
import Card from './Card'
import './index.css'
import sData from './sData'
ReactDom.render(
<>
<h1 className="heading_style">List of my favourite series</h1>

{sData.map((val)=>{
    return(
<Card 
imgsrc={val.imgsrc}
 title= {val.title}
sname={val.sname}
    link={val.link}
/>
    )
})}
</>

,document.getElementById("root")
)