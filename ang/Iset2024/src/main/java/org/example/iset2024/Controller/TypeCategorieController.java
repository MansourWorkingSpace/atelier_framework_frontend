package org.example.iset2024.Controller;
import org.example.iset2024.Model.TypeCategorie;
import org.example.iset2024.Service.TypeCategorieService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin(origins = "http://localhost:4200")  // Autorise les requêtes venant de localhost:4200
@RestController
@RequestMapping("/types")
public class TypeCategorieController {

    @Autowired
    private TypeCategorieService typeCategorieService;

    @GetMapping
    public List<TypeCategorie> getAllTypeCategories() {
        return typeCategorieService.getAllTypeCategories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeCategorie> getTypeCategorieById(@PathVariable Long id) {
        return typeCategorieService.getTypeCategorieById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public TypeCategorie createTypeCategorie(@RequestBody TypeCategorie typeCategorie) {
        return typeCategorieService.saveTypeCategorie(typeCategorie);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TypeCategorie> updateTypeCategorie(@PathVariable Long id, @RequestBody TypeCategorie updatedTypeCategorie) {
        return typeCategorieService.getTypeCategorieById(id)
                .map(typeCategorie -> {
                    typeCategorie.setTypeNom(updatedTypeCategorie.getTypeNom());
                    typeCategorie.setDescription(updatedTypeCategorie.getDescription());
                    return ResponseEntity.ok(typeCategorieService.saveTypeCategorie(typeCategorie));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTypeCategorie(@PathVariable Long id) {
        if (typeCategorieService.getTypeCategorieById(id).isPresent()) {
            typeCategorieService.deleteTypeCategorie(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
