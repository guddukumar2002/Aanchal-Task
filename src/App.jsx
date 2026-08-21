import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ShopByCategory from './components/ShopByCategory';
import WeddingSeason from './components/WeddingSeason';
import FeaturedNewArrivals from './components/FeaturedNewArrivals';
import KanchipuramBanner from './components/KanchipuramBanner';
import ShopByFabric from './components/ShopByFabric';
import ShadesAndColors from './components/ShadesAndColors';
import CottonSareesBanner from './components/CottonSareesBanner';
import NewArrivals from './components/NewArrivals';
import StoreHeritage from './components/StoreHeritage';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFabric, setSelectedFabric] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [wishlist, setWishlist] = useState([2, 4]); // Initial items in wishlist
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aftaab Jamawar Banarasi Silk Saree',
      price: 3250,
      quantity: 1,
      blouse: 'Unstitched',
      image: '/images/Frame 13.png'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle Wishlist item
  const handleToggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      showToast("Item removed from your Wishlist");
    } else {
      setWishlist([...wishlist, productId]);
      showToast("❤️ Item saved to your Wishlist!");
    }
  };

  // Add Item to Cart
  const handleAddToCart = (product, quantity = 1, blouse = 'Unstitched') => {
    const existingIndex = cartItems.findIndex(i => i.id === product.id && i.blouse === blouse);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        blouse: blouse,
        image: product.image
      }]);
    }
    showToast(`🛒 "${product.name}" added to shopping bag!`);
  };

  // Update Item Quantity in Cart
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
    } else {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  // Remove Item from Cart
  const handleRemoveCartItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    showToast("Item removed from shopping bag.");
  };

  // Handle Search Submission
  const handleSearchSubmit = (searchTerm) => {
    showToast(`Searching for "${searchTerm}"...`);
    const newArrivalsEl = document.getElementById('new-arrivals');
    if (newArrivalsEl) {
      newArrivalsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 400,
          backgroundColor: 'var(--bg-burgundy)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.04em',
          border: '1px solid var(--color-gold)'
        }} className="animate-fade-in">
          <CheckCircle2 size={18} color="var(--color-gold-light)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Navigation Header */}
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeCategory={selectedCategory}
        setActiveCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('new-arrivals');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main style={{ flex: 1 }}>
        {/* 3. Hero Banner ("NEW Arrivals") */}
        <HeroBanner onExplore={() => {
          const el = document.getElementById('categories');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 4. Shop by Category (6 Circular Swatches) */}
        <ShopByCategory
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Weaves for the Wedding Season (6 Burgundy Event Cards) */}
        <WeddingSeason
          onSelectCollection={(colId) => {
            showToast(`Viewing ${colId.replace('-', ' ')} wedding collection`);
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Featured New Arrivals (4 Cards: Aftaab, Kongposh, Satara, Naila) */}
        <FeaturedNewArrivals
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 7. Kanchipuram Silk Sarees Studio Banner */}
        <KanchipuramBanner
          onShopNow={() => {
            setSelectedFabric('pure-zari-kanchipuram');
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Shop by Fabric (18 Traditional Weave Swatch Cards) */}
        <ShopByFabric
          selectedFabric={selectedFabric}
          onSelectFabric={(fabId) => {
            setSelectedFabric(fabId);
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Shades & Colors (6 Color Swatch Cards) */}
        <ShadesAndColors
          selectedColor={selectedColor}
          onSelectColor={(colId) => {
            setSelectedColor(colId);
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10. Cotton Sarees Atmospheric Banner */}
        <CottonSareesBanner
          onShopCotton={() => {
            setSelectedFabric('cotton');
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 11. Trending Sarees Catalog Grid & Explore More */}
        <NewArrivals
          selectedCategory={selectedCategory}
          selectedFabric={selectedFabric}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 12. Store Heritage & About Us */}
        <StoreHeritage />

        {/* 13. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.includes(quickViewProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      {/* Search Overlay Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearchSubmit={handleSearchSubmit}
      />

    </div>
  );
}
