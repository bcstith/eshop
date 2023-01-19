// Shoulder Bag: price_1MRzv9HtX4tlw83yhvYf8PRX
// Microwave Oven: price_1MRzwaHtX4tlw83yvCaVbDPu
// Book: price_1MRzzLHtX4tlw83yYoBbxNyD
// Amazon Echo: price_1MRzy3HtX4tlw83yDYEy9fOo
// Ipad: price_1MS00WHtX4tlw83yeM6EcbVt

//Monitor: price_1MS023HtX4tlw83yfv2uRn2Y



const productsArray = [
    {
        id: 'price_1MRzv9HtX4tlw83yhvYf8PRX',
        title:'Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag. Water Repellent Fabric for Men and Women (Blue)',
        price:11.96,
        rating:5,
        image:'bennett_bag.jpg'
    },
    {
        id: 'price_1MRzwaHtX4tlw83yvCaVbDPu',
        title:'IFB 30 L Convention Microwave Oven (30BRC2, Black, With Starter Kit)',
        price:239.00,
        rating:4,
        image:'emeril_oven.jpg'
    },
    {
        id: 'price_1MRzy3HtX4tlw83yDYEy9fOo',
        title:'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
        price:96.00,
        rating:3,
        image:'amazon_echo.jpg'
    },
    {
        id: 'price_1MRzzLHtX4tlw83yYoBbxNyD',
        title:'All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback',
        price:19.00,
        rating:3,
        image:'all_light_book.jpg'
    },
    {
        id: 'price_1MS00WHtX4tlw83yeM6EcbVt',
        title:'New Apple iPad Pro (12.9-inch, Wi-Fi 128GB) - Silver (4th generation)',
        price:599.00,
        rating:2,
        image:'ipad.jpg'
    },
    {
        id: 'price_1MS023HtX4tlw83yfv2uRn2Y',
        title:"Samsung LC49RG90SSUXEN 49' Curved LED Gamer Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price:1094.98,
        rating:2,
        image:'curved_monitor.jpg'
    }


]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData === undefined){
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};