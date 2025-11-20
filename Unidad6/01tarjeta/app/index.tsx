import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

interface TarjetaProductoProps {
  name: string;
  price: number;
  image: any;
  onAddToCart: () => void;
}

// 🔹 Botón personalizado
const BotonPersonalizado: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// 🔹 Tarjeta de producto
const TarjetaProducto: React.FC<TarjetaProductoProps> = ({ name, price, image, onAddToCart }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>${price.toFixed(2)}</Text>
    <BotonPersonalizado title="Añadir al carrito" onPress={onAddToCart} />
  </View>
);

// 🔹 Página principal
const Index: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Carrito */}
      <View style={styles.cartContainer}>
        <Text style={styles.cartIcon}>🛒 {cartCount}</Text>
      </View>

      {/* Tarjetas de productos */}
      <TarjetaProducto
        name="Camiseta"
        price={19.99}
        image={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.joma-sport.com%2Fes_ES%2Fcamiseta-manga-corta-hombre-desert-negro%2F101739.100.html&psig=AOvVaw3ClmWmjsENI35t4MBEPS3H&ust=1763554066248000&source=images&opi=89978449' }}
        onAddToCart={handleAddToCart}
      />
      <TarjetaProducto
        name="Pantalón"
        price={39.99}
        image={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.prolaboral.com%2Fes%2F1991-pantalon-vaquero-issa-jest-stretch-8025.html%3Fsrsltid%3DAfmBOoqIbVbfzJi8PlYFVtE4gWOQzCN2-p6AL24IVpeN8IiPTqz7Il5Z&psig=AOvVaw1JfpRyIGcG_T4u4V30OLNl&ust=1763554093588000&source=images&opi=89978449' }}
        onAddToCart={handleAddToCart}
      />
      <TarjetaProducto
        name="Zapatillas"
        price={59.99}
        image={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzapatosbaratos-lowcost.com%2Fzapatillas-lona-mujer%2F7798-zapatilla-cv-roja.html&psig=AOvVaw2FA1l6SL8exDXZKXw47H9-&ust=1763554122928000&source=images&opi=89978449' }}
        onAddToCart={handleAddToCart}
      />
      <TarjetaProducto
        name="Gorra"
        price={14.99}
        image={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbordadosbarcelona.com%2Fgorra-beechfield-b65%2F&psig=AOvVaw3NGGJS14OxC-hO0Wikzlad&ust=1763554138502000&source=images&opi=89978449' }}
        onAddToCart={handleAddToCart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
  },
  cartContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  cartIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Index;