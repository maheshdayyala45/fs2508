 function Member(props){
 console.log(props.name);
 const memberName=props.title;
 const memberCity=props.price;

 return (
 <div className="member">
    <h2>{memberName}</h2>
    <p>{memberCity}</p>
       
 </div>
 )
}
export default Member;