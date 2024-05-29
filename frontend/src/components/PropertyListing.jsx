import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";



const PropertyListing = ({user_id}) =>{
    const [propertyDetails,setPropertyDetails] = useState([]);
    useEffect(()=>{
        const getAllProperty = async () =>{
            try {
                const response = await axios.post('https://vercel-backend-deployment.vercel.app/all-properties',{id:user_id});
                setPropertyDetails(response.data);
            } catch (error) {

            }
        }
        getAllProperty();
    },[])
    return(
        <>
        <h2 className="text-center my-4">All Posted Properties</h2>
            { propertyDetails.length>0 &&
            <div className="property-listing">
                {propertyDetails.map((j) => (
                    <PropertyCard key={j.property_id} id={j.property_id} place={j.place} address={j.address} bedrooms={j.bedrooms} bathrooms={j.bathrooms} amenities={j.amenities} price={j.price}/>
                ))}
            </div>
            }
        </>
    )
} 
export default PropertyListing;