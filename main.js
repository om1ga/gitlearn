//生成代码读取doc
// 定义商品类
class Product {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

// 商城类
class Mall {
    constructor() {
        this.products = {
            digital: [],
            clothing: []
        };
        this.initProducts();
    }

    // 初始化商品数据
    initProducts() {
        this.products.digital = [
            new Product(1, "iPhone 13", 5999, "最新款苹果手机", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712887882"),
            new Product(2, "MacBook Pro", 12999, "专业级笔记本电脑", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000"),
            new Product(3, "AirPods Pro", 1999, "无线降噪耳机", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361"),
            new Product(4, "iPad Air", 4799, "轻薄平板电脑", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png&qlt=95&.v=1645636335911")
        ];

        this.products.clothing = [
            new Product(5, "纯棉T恤", 299, "经典简约设计", "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200"),
            new Product(6, "连帽卫衣", 499, "舒适保暖，时尚设计", "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200"),
            new Product(7, "棒球帽", 199, "遮阳防晒，经典款式", "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200")
        ];
    }

    // 展示指定分类的商品
    displayProducts(category = 'digital') {
        const container = document.querySelector('.product-container');
        container.innerHTML = ''; // 清空当前内容

        this.products[category].forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">￥${product.price}</p>
                <p class="description">${product.description}</p>
                <button onclick="addToCart(${product.id})">加入购物车</button>
            `;
            
            container.appendChild(productCard);
        });
    }
}

// 添加基本样式
const style = document.createElement('style');
style.textContent = `
    .product-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px;
    }
    
    .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        width: 250px;
        text-align: center;
        background: linear-gradient(45deg, #FFD700, #FF8C00, #FF1493, #00BFFF, #FFD700);
        background-size: 400% 400%;
        animation: rainbow 10s ease infinite;
    }
    
    @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    .product-card img {
        max-width: 200px;
        height: auto;
    }
    
    .price {
        color: #e4393c;
        font-size: 20px;
        font-weight: bold;
    }
    
    button {
        background-color: #e4393c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #c81623;
    }
`;
document.head.appendChild(style);

// 初始化商城
const mall = new Mall();
mall.displayProducts(); // 默认显示数码产品

// 购物车功能
function addToCart(productId) {
    alert(`商品${productId}已添加到购物车！`);
}

// Tab切换功能
document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        mall.displayProducts(category);  // 调用displayProducts方法显示对应分类的商品
    });
});