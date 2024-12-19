package org.example.iset2024.Service;
import jakarta.transaction.Transactional;
import org.example.iset2024.Model.TypeCategorie;
import org.example.iset2024.Repository.TypeCategorieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Transactional
public class TypeCategorieService {

    @Autowired
    private TypeCategorieRepo repo;

    public List<TypeCategorie> getAllTypeCategories() {
        return repo.findAll();
    }

    public Optional<TypeCategorie> getTypeCategorieById(Long id) {
        return repo.findById(id);
    }

    public TypeCategorie saveTypeCategorie(TypeCategorie typeCategorie) {
        return repo.save(typeCategorie);
    }

    public void deleteTypeCategorie(Long id) {
        repo.deleteById(id);
    }
}
