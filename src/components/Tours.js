import Card from "./Card";

function Tours({tours, removeTour}) {


    return(
        <div className="container">

          <div>
               <h2 className="title">Plan With Navneet</h2>
          </div>
          <div className="cards">
               {
                tours.map((tour)=>{
                    {/* poori ki poori tour i.e  saato cities clone kra li card k andar using {...tour*/}
                    {/* Remember this thumb rule--> jb v map wala funcn use kr re ho component k saath tb hm hmesa key ko pass kr rhe honge. Agr id hua to id ko passs krenge agr id ni hua to key{index} ko pass krenge */}
                   return <Card key = {tour.id} {...tour} removeTour = {removeTour}></Card>  
                })
               }
          </div>

        </div>
       
    )
   
}

export default Tours; 