

export const getCart = async () => {
    try {
      const cart = await fetch(window.Shopify.routes.root + 'cart.js')
      const cartJson = await cart.json()
      console.log("cart", cartJson)
      return cartJson
    } catch {
      console.log('error')
    }
}

export const getCurrentUrl = () => {
    let url = window.location.href
    document.body.addEventListener('click', ()=>{
    requestAnimationFrame(()=>{
      if(url!==location.href){
        console.log('url changed');
        url = location.href
      }
    });
}, true);
    return url
}

export const getSelectedVariant =() => {
    const url = getCurrentUrl()
    const variantId = url.split('variant=')[1]
    return variantId
}

export const getCurrentProduct = async () => {
    const url = getCurrentUrl()
    const productId = url.split('/products/')[1].split('?')[0]
    const product = await fetch(window.Shopify.routes.root + 'products/' + productId + '.js')
    const productJson = await product.json()
    // console.log("productJson", productJson)
    return productJson
}


export const getCustomVariant = async () => {    
    const product = await getCurrentProduct()
    try {
    const customVariant = product.variants.filter((variant) => variant.title === 'Image')   
    if(customVariant.length > 0) {
        return customVariant
    } else {
        return false
    }
} catch {
    console.log('error')
}
}

export const addImageToCart = async (image, key) => {
    const formData = {
     "id": key,
        "quantity": 1,
        "properties": {
            "image": image
        }
    }
    try {
        const result = await fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const resultJson = await result.json()
        // console.log("resultJson", resultJson)
        return resultJson
    }
    catch {
        console.log('error')
    }
}


