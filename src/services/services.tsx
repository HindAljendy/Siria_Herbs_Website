import axios from "axios";
import { TContactSocialMediaData } from "../types/types";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getSocialMediaData(): Promise<TContactSocialMediaData> {
        const response = await axios.get('http://127.0.0.1:8000/api/contacts/1').then(res => {

                return res.data;
        })
        return response;

}


export async function getCategoriesforBrand(brand:number):Promise<string[]>{

        const response = await axios.get(`http://127.0.0.1:8000/api/brand/${brand}/site`).then(res=>
                
                { 
                        return res.data.data.categories
                });
        return response;
}


export async function getProductsDependOnCategory(brand:number,category:number):Promise<string[]>{

        const response = await axios.get(`http://127.0.0.1:8000/api/brand/${brand}/site`).then(res=>
                
                { 
                
                console.log(res.data.data.categories[category-1].products)
                 return res.data.data.categories[category-1]});
        return response;
}





