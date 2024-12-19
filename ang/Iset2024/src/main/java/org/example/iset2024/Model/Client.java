package org.example.iset2024.Model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.time.Period;
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Le prénom est obligatoire")
    @Size(min = 2, max = 30, message = "Le prénom doit avoir entre 2 et 30 caractères")
    private String prenom;

    @NotNull(message = "Le nom est obligatoire")
    @Size(min = 2, max = 30, message = "Le nom doit avoir entre 2 et 30 caractères")
    private String nom;

    @NotNull(message = "La date de naissance est obligatoire")
    @Past(message = "La date de naissance doit être dans le passé")
    private LocalDate dateNaissance;

    @Email(message = "Veuillez entrer une adresse email valide")
    @Column(unique = true)//message = "Cet email est déjà utilisé")
    private String email;

    @Pattern(regexp = "^[0-9]{10}$", message = "Le numéro de téléphone doit contenir exactement 10 chiffres")
    private String telephone;
    @NotBlank(message = "Le numéro de carte bancaire est obligatoire")
    // Vérification du format 1234-5678-9876-5432
    @Pattern(regexp = "\\d{4}-\\d{4}-\\d{4}-\\d{4}",
            message = "Le numéro de carte doit être au format ####-####-####-####")
    private String creditCardNumber;

    // Calcul de l'âge basé sur la date de naissance
    private Integer age;
    private String contact;

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
        this.age = calculateAge(dateNaissance);
    }

    private Integer calculateAge(LocalDate dateNaissance) {
        if (dateNaissance != null) {
            return Period.between(dateNaissance, LocalDate.now()).getYears();
        }
        return null;
    }

    public Client(Long clientId) {
    }

    public Client() {
    }
// Getters et Setters...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom( String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }
}
