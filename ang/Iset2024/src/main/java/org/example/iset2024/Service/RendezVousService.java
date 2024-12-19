package org.example.iset2024.Service;

import org.example.iset2024.Model.*;
import org.example.iset2024.Model.RendezVous;
import org.example.iset2024.Repository.RendezVousRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.time.*;
import java.util.*;

@Service
public class RendezVousService {
    @Autowired
    private RendezVousRepository rendezVousRepository;

    public List<LocalTime> obtenirDisponibilites(Long medecinId, LocalDate date) {
        List<RendezVous> rendezVousList = rendezVousRepository.findByDateAndMedecinId(date, medecinId);

        // Supposons que les rendez-vous soient possibles toutes les heures de 9h à 17h
        List<LocalTime> disponibilites = new ArrayList<>();
        for (int i = 9; i <= 17; i++) {
            LocalTime heure = LocalTime.of(i, 0);
            if (rendezVousList.stream().noneMatch(r -> r.getHeure().equals(heure))) {
                disponibilites.add(heure);
            }
        }
        return disponibilites;
    }

    public RendezVous reserverRendezVous(Long clientId, Long medecinId, LocalDate date, LocalTime heure) {
        // Validation et enregistrement
        RendezVous rendezVous = new RendezVous();
        rendezVous.setClient(new Client(clientId)); // On suppose que l'objet Client est déjà existant
        rendezVous.setMedecin(new Medecin(medecinId)); // Idem pour Medecin
        rendezVous.setDate(date);
        rendezVous.setHeure(heure);

        return rendezVousRepository.save(rendezVous);
    }
}
