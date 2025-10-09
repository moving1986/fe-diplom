export const getUppercaseFirstLetter = (value) => {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} : ${minutes.toString().padStart(2, '0')}`;
};

export const formatPrice = (price) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || '—';
};

export const getMinPriceForClass = (priceInfo, className) => {
  if (!priceInfo || !priceInfo[className]) return null;

  const classPrices = priceInfo[className];

  if (classPrices.bottom_price) return classPrices.bottom_price;
  if (classPrices.price) return classPrices.price;
  if (classPrices.top_price) return classPrices.top_price;
  if (classPrices.side_price) return classPrices.side_price;

  return null;
};
