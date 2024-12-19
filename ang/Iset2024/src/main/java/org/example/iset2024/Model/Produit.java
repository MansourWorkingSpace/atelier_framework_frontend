package org.example.iset2024.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long IdProduct;


    public Produit(Long idProduct) {
        IdProduct = idProduct;
    }

    public Produit() {
    }

    public Long getIdProduct() {
        return IdProduct;
    }

    public void setIdProduct(Long idProduct) {
        IdProduct = idProduct;
    }
}
