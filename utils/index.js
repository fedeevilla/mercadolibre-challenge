export const CONDITION = {
  used: "Usado",
  new: "Nuevo",
};

export const formatPrice = (price, currency_id) =>
  price.toLocaleString("es-AR", {
    style: "currency",
    currency: currency_id,
  });
