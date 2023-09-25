import { useEffect } from "react";
import { useState } from "react";
// import PhoneCard from "../Phone/PhoneCard";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow,setIsShow]=useState(false)
  const [totalPrice,setTotalPrice]= useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("Data"));
    if (favoriteItems) {
      setFavorite(favoriteItems);
      const total = favoriteItems.reduce((previous,current)=>previous+current.price,0)
      setTotalPrice(total)
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log("price" , totalPrice)
//   console.log(favorite);

const handleRemove = ()=> {
    localStorage.clear();
    setFavorite([])
    setNoFound("No Data Found");
}

console.log(isShow)
  return (
    <div className="">
      {noFound ? (
        <p className="h-[80vh] flex items-center justify-center">{noFound}</p>
      ) : (
        <div>
          {favorite.length > 0 && (
            <div className="flex justify-center my-10">
              <button onClick={handleRemove} className="px-5 bg-green-500 text-xl py-2">
                Delete All Favorite
              </button>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {isShow?favorite.map((phone) => (
              <FavoriteCard phone={phone} key={phone.id}></FavoriteCard>
            )):
            favorite.slice(0,4).map((phone) => (
                <FavoriteCard phone={phone} key={phone.id}></FavoriteCard>
              ))
            }
          </div>
            <div className="flex justify-center my-10">
                {
                    favorite.length>4?<button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-500 text-xl py-2">
                    {!isShow? "Show More":"Show Less"}
                  </button>:
                  ""
                }
              
            </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
