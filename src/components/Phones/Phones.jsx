
import PhonesCard from "./PhonesCard";


const Phones = ({phones}) => {
    
    return (
        <div>
            <h1 className="text-center text-2xl mb-16 font-medium">All Category Phones</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                phones?.map(phone=> <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
            </div>
        </div>
    );
};

export default Phones;