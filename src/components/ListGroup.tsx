function ListGroup(){

    let city = [
        'New Delhi',
        'Kolkata',
        'Chennai',
        'Varanasi'
    ];
    //  city = [];
    return (
    <>
    <h1>List</h1>
     {city.length ===0 && <p>List is empty!</p>}
    <ul className="list-group">
    {city.map((x,index)=>(
    <li
     className = "List-group-item" 
     key={x} 
     onClick={()=>console.log(x,index)}
     >
        {x}
        </li>))}
  </ul>
  </>
    );
}

export default ListGroup;