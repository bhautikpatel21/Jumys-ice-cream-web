import React, { useEffect } from 'react';
import ShopList from './ShopList';

function Shop() {
  useEffect(() => {
    window.open('https://wpbingosite.com/wordpress/jumys/shop/', '_blank');
  }, []);

  return (
    <div>
<ShopList/>
    </div>
  );
}

export default Shop;