package org.example.iset2024.Controller;
import org.example.iset2024.Model.*;
import org.example.iset2024.Model.RendezVous;
import org.example.iset2024.Service.RendezVousService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.*;
@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousController {
    @Autowired
    private RendezVousService rendezVousService;

    // Endpoint pour obtenir les disponibilités d'un médecin
    @GetMapping("/disponibilites")
    public ResponseEntity<List<LocalTime>> obtenirDisponibilites(
            @RequestParam Long medecinId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {

        List<LocalTime> disponibilites = rendezVousService.obtenirDisponibilites(medecinId, date);
        return ResponseEntity.ok(disponibilites);
    }

    // Endpoint pour réserver un rendez-vous
    @PostMapping("/reserver")
    public ResponseEntity<RendezVous> reserverRendezVous(
            @RequestParam Long clientId,
            @RequestParam Long medecinId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime heure) {

        RendezVous rendezVous = rendezVousService.reserverRendezVous(clientId, medecinId, date, heure);
        return ResponseEntity.ok(rendezVous);
    }
}
