const products = [
  {
    id: 1,
    name: "Tomatos",
    href: "#",
    price: "$48",
    imageSrc:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-56196,resizemode-75,msid-95423731/magazines/panache/5-reasons-why-tomatoes-should-be-your-favourite-fruit-this-year/tomatoes-canva.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Onion",
    href: "#",
    price: "$35",
    imageSrc:
      "https://www.asianfoodexport.com/images/product/fresh-yellow-onion.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Potato",
    href: "#",
    price: "$89",
    imageSrc:
      "https://t3.ftcdn.net/jpg/00/41/30/10/360_F_41301053_AbLi3hlosbLajBo7lQdNyfGz9eusxY1x.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Rice",
    href: "#",
    price: "$35",
    imageSrc:
      "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/649494-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNDEwNTd8aW1hZ2UvanBlZ3xhRE5tTDJnelpTOHhNekEwTWpVMk9USTBPRGM1T0M4Mk5EazBPVFF0TURFdWFuQm5YekV5TURCWGVERXlNREJJfDM4N2I2MWU1ZWZkMWQyZWM2ODBiNGI4OGJhN2MwZGRmYjg5YTAzNTBhZGQ4NTYwNzA4ODhhNzNhMDJjNTczY2Y",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Chilli",
    href: "#",
    price: "$48",
    imageSrc: "https://clipart-library.com/images/8cAbqGE4i.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Rice",
    href: "#",
    price: "$35",
    imageSrc:
      "https://www.healthshots.com/wp-content/uploads/2020/09/white-rice.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Green Cilli ",
    href: "#",
    price: "$89",
    imageSrc:
      "https://highlyfresh.in/wp-content/uploads/2021/07/Green-Chilli3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Red Chilli",
    href: "#",
    price: "$35",
    imageSrc:
      "https://nusafoodprima.com/wp-content/uploads/2018/05/chili-red.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 9,
    name: "Nuts",
    href: "#",
    price: "$48",
    imageSrc:
      "https://cdn.editorji.com/61c6da282d884_groundnuts-heart-shape-plate-put-sack-groundnuts-1150-34403.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 10,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://rukminim2.flixcart.com/image/850/1000/j9st5zk0/plant-seed/j/v/c/100-spinach-seeds-palak-seeds-green-leafy-vegetables-seeds-pack-original-imaexkgnawjqvmju.jpeg?q=90",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 11,
    name: "mangos",
    href: "#",
    price: "$89",
    imageSrc: "https://sahajaaharam.com/files/Mango%20-%20Mallika.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 12,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://w7.pngwing.com/pngs/247/848/png-transparent-sugar-beet-organic-food-beetroot-vegetable-beet-food-blueberry-fruit.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Products() {
  return (
    <div
      style={{
        backgroundColor: "#dddddd",
        borderRadius: "12px",
      }}
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-64 w-70 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
