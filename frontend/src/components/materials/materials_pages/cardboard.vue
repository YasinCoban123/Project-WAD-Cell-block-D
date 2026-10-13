<script setup lang="ts">
import Navbar from '../../Navbar.vue'
import Footer from '../../Footer.vue'
import cardboardImage from '../../../assets/img/cardboard.jpg'
</script>
<template>
      <Navbar/>
  <div class="product-section">
    <div id="first-product-sect">
      <img :src="cardboardImage" alt="Cardboard">
    </div>
    <div id="second-product-sect">
      <h1>Cardboard</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dolor nam repellendus minima quia aliquid sunt quo, sapiente consequatur unde 
        expedita eveniet! Aperiam obcaecati dolore quo nulla consequatur aut vel porro!
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dolor nam repellendus minima quia aliquid sunt quo, sapiente consequatur unde 
        expedita eveniet! Aperiam obcaecati dolore quo nulla consequatur aut vel porro!
      </p>
      <div class="material-order">
        <div class="quantity-field">
          <label for="cardboard-quantity">Quantity</label>
          <input id="cardboard-quantity" type="number" min="1" value="1">
        </div>
        <button type="button">Order</button>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.material-order {
  display: flex;
  align-items: end;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.material-order label {
  display: block;
  margin-bottom: 0.3rem;
}

.quantity-field {
  display: flex;
  flex-direction: column;
}

.material-order input {
  box-sizing: border-box;
  width: 5rem;
  padding: 0.45rem 0.5rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  font: inherit;
}

.material-order input:focus {
  outline: 2px solid #e69114;
  outline-offset: 1px;
}

.material-order button {
  padding: 0.5rem 1rem;
  border: 1px solid #d8870c;
  border-radius: 4px;
  background: #e69114;
  font: inherit;
  cursor: pointer;
}

.material-order button:hover {
  background: #f0a52f;
}
</style>
