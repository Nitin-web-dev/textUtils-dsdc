import React, { useState } from 'react'

export default function AboutUs() {
    const [style,setStyle] = useState({
            color:"black",
            backgroundColor:"white",
        })

    const handleStyle = () => {
      if (style.color === "white") {
        setStyle({color:"black",backgroundColor:"white"})
      }
      else{
        setStyle({color:"white",backgroundColor:"rgb(0,0,0,0.5)"})
      }
    }


  return (
    <div>
     <div class="card mb-3" style={style}>
  <div class="card-body">
    <h5 class="card-title">About Us</h5>
    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sunt, quidem earum sapiente iure soluta ab ad repellendus reprehenderit voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi perferendis maxime harum alias facilis voluptates illum? Provident quas iusto incidunt voluptatum quos quibusdam eaque dolorem nostrum consequuntur omnis. Dolores!.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

    <button className="btn btn-primary" onClick={handleStyle}>Enable Dark Mode</button>

  </div>
</div>
    </div>
  )
}