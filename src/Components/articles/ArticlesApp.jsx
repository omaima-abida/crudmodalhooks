import React from 'react'
import { fetchArticles } from '../../Services/ArticleService'

const ArticlesApp = () => {
    const [products,setProducts]=useState([])
    useEffect(() => {
        listproduits()
    }, [])
    const listproduits=()=>{
        fetchArticles()
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
        }
  return (
    <div>
      Liste des articles
    </div>
  )
}

export default ArticlesApp
