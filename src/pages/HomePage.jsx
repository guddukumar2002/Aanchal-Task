import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ShopByCategory from '../components/ShopByCategory';
import WeddingSeason from '../components/WeddingSeason';
import NewArrivals from '../components/NewArrivals';
import KanchipuramBanner from '../components/KanchipuramBanner';
import ShopByFabric from '../components/ShopByFabric';
import LuxuryCollection from '../components/LuxuryCollection';
import CottonSareesBanner from '../components/CottonSareesBanner';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';

export default function HomePage({
  selectedCategory, setSelectedCategory,
  selectedFabric, setSelectedFabric,
  wishlist, onToggleWishlist,
  onAddToCart, onQuickView,
  showToast
}) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ flex: 1 }}>
      <HeroBanner onExplore={() => scrollTo('categories')} />

      <ShopByCategory
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => { setSelectedCategory(id); scrollTo('new-arrivals'); }}
      />

      <WeddingSeason
        onSelectCollection={(id) => { showToast(`Viewing ${id.replace('-', ' ')} collection`); scrollTo('new-arrivals'); }}
      />

      <NewArrivals
        selectedCategory={selectedCategory}
        selectedFabric={selectedFabric}
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
      />

      <KanchipuramBanner
        onShopNow={() => { setSelectedFabric('pure-zari-kanchipuram'); scrollTo('new-arrivals'); }}
      />

      <ShopByFabric
        selectedFabric={selectedFabric}
        onSelectFabric={(id) => { setSelectedFabric(id); scrollTo('new-arrivals'); }}
      />

      <LuxuryCollection />

      <CottonSareesBanner />

      <AboutUs />

      <FAQ />
    </main>
  );
}
