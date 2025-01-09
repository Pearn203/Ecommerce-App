import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";

import commonFeatureSlice from "./common-slice";
import shopAddressSlice from "./shop/address-slice";
import shopProductsSlice from "./shop/products-slice";
import shoppingCartSlice from "./shop/cart-slice";
import reviewSlice from "./shop/review-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,
    shopProducts: shopProductsSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shopAddressSlice,
    shopReview: reviewSlice,
    commonFeature: commonFeatureSlice,
    shopOrder: shopOrderSlice,
    shopSearch:shopSearchSlice,
  },
});

export default store;
