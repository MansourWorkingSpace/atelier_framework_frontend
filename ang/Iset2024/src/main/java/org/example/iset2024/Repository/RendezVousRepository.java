package org.example.iset2024.Repository;

import org.example.iset2024.Model.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {
    List<RendezVous> findByDateAndMedecinId(LocalDate date, Long medecinId);

}
