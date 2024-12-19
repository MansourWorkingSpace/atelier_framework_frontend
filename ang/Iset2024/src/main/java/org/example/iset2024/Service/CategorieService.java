package org.example.iset2024.Service;

import jakarta.transaction.Transactional;
import org.example.iset2024.Model.Categorie;
import org.example.iset2024.Repository.CategorieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class CategorieService {

    @Autowired
    private CategorieRepo repo;

    public List<Categorie> getAllCategories() {
        return repo.findAll();
    }

    public Optional<Categorie> getCategorieById(Long id) {
        return repo.findById(id);
    }

    public Categorie saveCategorie(Categorie categorie) {
        return repo.save(categorie);
    }

    public void deleteCategorie(Long id) {
        repo.deleteById(id);
    }
}
