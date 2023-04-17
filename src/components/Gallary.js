//name export before function without default
import '../App.css';
const heading={
   textAlign:'center',
   width:500
}
 function Gallary(){
    return(
      <section>
        <h1 className='App'>Amazing Student</h1>
        <Profile/>
        <Profile/>
        <Profile/>
      </section>
    );
}
 function Profile(){
    return(
        <img src="https://imgs.search.brave.com/Rozpc9ecTXAJfzCBu7inbvCkBB6iFrXDxtAyouwuaVI/rs:fit:1200:1180:1/g:ce/aHR0cHM6Ly93d3cu/cmFuZG9scGhjb2xs/ZWdlLmVkdS9uZXdz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8zMS8yMDE1LzAy/L25hdGlvbmFsX2dh/bGxlcnlfbG9uZG9u/LmpwZw"
         alt=""
         style={heading}
         />
    )
}
export default Gallary;