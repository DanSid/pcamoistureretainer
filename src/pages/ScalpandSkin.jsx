import ProductPage from '../components/site/ProductPage'
import { productMap } from '../data/products'

export default function ScalpandSkin() {
  return <ProductPage product={productMap['scalp-and-skin']} />
}
