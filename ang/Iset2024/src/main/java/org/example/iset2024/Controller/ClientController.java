package org.example.iset2024.Controller;
import org.example.iset2024.Model.Client;
import org.example.iset2024.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/clients")
@Validated
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("liste")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("getbyid/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("add")
    public ResponseEntity<Client> createClient(@Valid @RequestBody Client client) {
        Client savedClient = clientService.saveClient(client);
        return ResponseEntity.ok(savedClient);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @Valid @RequestBody Client updatedClient) {
        return clientService.getClientById(id)
                .map(client -> {
                    client.setNom(updatedClient.getNom());
                    client.setPrenom(updatedClient.getPrenom());
                    client.setDateNaissance(updatedClient.getDateNaissance());
                    Client savedClient = clientService.saveClient(client);
                    return ResponseEntity.ok(savedClient);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        if (clientService.getClientById(id).isPresent()) {
            clientService.deleteClient(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
