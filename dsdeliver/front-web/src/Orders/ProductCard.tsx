
import { Product } from './types';

type Props ={product: Product;
onSelectProduct: (product: Product) =>void;
isSelected: boolean
}


function formatPrice (price:number){
    const formatter = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'});
    return formatter.format(price);
}




function ProductCard({product,onSelectProduct,isSelected}:Props) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
        onClick ={() => onSelectProduct (product)}>
            <h3 className="order-card-title">  {product.name}</h3>
          
            <img src = {product.imageUri} className="order-card-image" alt = {product.name} />
            <h3 className="order-card-price"> {formatPrice (product.price)}</h3>
            <div className="order-card-description">
                <h3> {product.description}</h3>
            </div>

        </div>
    )
}
export default ProductCard