package org.example.iset2024.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Categorie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String description;
    @ManyToOne
    @JoinColumn(name = "type_id")
    private TypeCategorie typeCategorie;

    public Categorie() {
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TypeCategorie getTypeCategorie() {
        return typeCategorie;
    }

    public void setTypeCategorie(TypeCategorie typeCategorie) {
        this.typeCategorie = typeCategorie;
    }
}

