export default (props)=>(

        <div id="clase-container">

                <h2>Clase de {props.nombre}</h2>   
                {props.clase.map(item=>{
                    return (
                        <div id="clase-list">
                            <img src={item.foto} alt=""/>
                            <p>{item.first_name} {item.last_name}</p>
                        </div>
                        )
                    })
                }
                <style jsx>
                        {
                        `
                            #clase-container{
                                perspective:500px;
                            }
                            #clase-list{
                                display: flex;
                            }
                            
                        `
                        }
                </style>
        </div>
    
)