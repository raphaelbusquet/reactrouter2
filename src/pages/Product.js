/* eslint-disable react/jsx-no-undef */
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {

    // Rota Dinamica
    const { id } = useParams();

    // Carregamento dado individual
    const url = `http://localhost:3000/products/${id}`;

    const {data: product, loading, error} = useFetch(url)



  return (
    <>
        <p>Id do produto: {id} </p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>
                    {product.name}
                </h1>
                <p>R$ {product.price}</p>
                {/* Nested Routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product;