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

export const getItems = async (cart) => {
    const items = cart.items.map((item) => {
        return {
            id: item.id,
            key: item.key,
            quantity: item.quantity,
            variantId: item.variant_id,
            variantTitle: item.variant_title,
        }
    })
    // console.log("items", items)
    return items
}

export const customItems = (items) => {
    const customItems = items.filter((item) => item.variantTitle === 'Image')
    // console.log("customItems", customItems)   
    return customItems
}

export const getCustomItems = async () => {
    const cart = await getCart()
    const items = await getItems(cart)
    const customArray = await customItems(items)
    if(customArray.length > 0) {
        return customArray
    } else {
        return false
    }
   
}

export const addImageToCart = async (image, key) => {
    const formData = {
     "id": key,
        "properties": {
            "image": image
        }
    }
    try {
        const result = await fetch(window.Shopify.routes.root + 'cart/change.js', {
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


