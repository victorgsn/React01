import styled from "styled-components";

const SDiv = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

const SDivInfo = styled.div`
    padding: 10px 5px;
    
    p {
        font-size: 14px;
        margin: 5px 0;
        line-height: 1.3em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const SImg = styled.img`
    width: 100%;
    height: 140px;
    object-fit: contain;
    border-radius: 5px;
`;

/**
 * @param {Object} product
 * @param {Function} onClick
 */
function Product({ product, onClick }) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <SImg src={product.image} alt={product.name} />
            <SDivInfo>
                <p>{product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
        </SDiv>
    );
}

const SSection = styled.section`
    overflow-y: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

/**
 * @param {Object[]} products
 * @param {Function} onClick
 */
function Products({ products, onClick, isLoading = false }) {
    return (
        <SSection>
            {isLoading
                ? "Carregando..."
                : products.length > 0
                ? products.map((product) => (
                      <Product key={product.id} product={product} onClick={onClick} />
                  ))
                : "Nenhum produto encontrado!"}
        </SSection>
    );
}

export default Products;
