import "./List.scss"
import Card from "../Card/Card"
import useFetch from "../../Hooks/useFetch";



const List = ({catId,maxPrice,sort,subCat}) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCat.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][Price][$lte]=${maxPrice}&sort=Price:${sort}`
    );

  return (
    <div className="List">
    {loading?<h1>Loading...</h1>:data?.map((item) => (<Card key={item.id} item={item} />))}
    </div>
  )
}

export default List