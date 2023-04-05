# Do-product-card

this is a test package for deploy to npm

### Limbers

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'do-product-card'

<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({
             reset,
             count,
             increaseBy,
             maxCount,
             isMaxCountReached
        }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```