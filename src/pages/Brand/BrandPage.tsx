import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


type TBrandData = {
    id: number;
    name: string;
    description: string;
    color: string;
    background_image: string;
    presentation_image: string;
    main_image: string;
    categories: TCategoryData[]
}

type TCategoryData = {
    id: number;
    name: string;
    products: TProdactData[]
}

type TProdactData = {
    id: number;
    name: string;
    main_image: string;
}

const BrandPage = () => {

    const { itemId } = useParams<{ itemId: string; }>();
    const [data, setData] = useState<TBrandData>();
    const [productDepentOnCategory, setProductDepentOnCategory] = useState<TProdactData[] | undefined>([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/brand/${itemId}/site`)
            .then((response) => setData(response.data.data))
            .then(() => console.table(data));
    }, []);

    const getProductsDependOnCategory = (categoryId: number) => {
        setProductDepentOnCategory(data?.categories[categoryId].products)
    }

    // console.log(data)
    console.log(productDepentOnCategory)


    return (
        <div>Brand</div>
    );
}

export default BrandPage






