import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import commonFeatureSlice from "./common-slice";

import shopProductsSlice from "./shop/products-slice";
import shoppingCartSlice from "./shop/cart-slice";
import reviewSlice from "./shop/review-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shoppingCartSlice,
    shopReview: reviewSlice,
    commonFeature: commonFeatureSlice
  },
});

export default store;
