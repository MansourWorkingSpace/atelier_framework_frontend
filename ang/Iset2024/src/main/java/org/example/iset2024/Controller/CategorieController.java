package org.example.iset2024.Controller;

import org.example.iset2024.Model.Categorie;
import org.example.iset2024.Service.CategorieService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:4200")  // Autorise les requêtes venant de localhost:4200
public class CategorieController {

    @Autowired
    private CategorieService serv;

    @GetMapping("/list")
    public List<Categorie> getAllCategories() {
        return serv.getAllCategories();
    }

    @GetMapping("Get/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable Long id) {
        return serv.getCategorieById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public Categorie createCategorie(@RequestBody Categorie categorie) {
        return serv.saveCategorie(categorie);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Categorie> updateCategorie(@PathVariable Long id, @RequestBody Categorie updatedCategorie) {
        return serv.getCategorieById(id)
                .map(categorie -> {
                    categorie.setNom(updatedCategorie.getNom());
                    categorie.setDescription(updatedCategorie.getDescription());
                    categorie.setTypeCategorie(updatedCategorie.getTypeCategorie());
                    return ResponseEntity.ok(serv.saveCategorie(categorie));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteCategorie(@PathVariable Long id) {
        if (serv.getCategorieById(id).isPresent()) {
            serv.deleteCategorie(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
