export const calculatePrice = (basePrice, selectedSize, selectedBand) => {
  let priceModifier = 0;
  if (selectedSize) priceModifier += selectedSize.priceModifier;
  if (selectedBand) priceModifier += selectedBand.priceModifier;

  return basePrice + priceModifier;
};
