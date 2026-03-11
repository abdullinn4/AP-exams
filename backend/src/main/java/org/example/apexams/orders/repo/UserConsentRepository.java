package org.example.apexams.orders.repo;

import org.example.apexams.orders.entity.UserConsent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserConsentRepository extends JpaRepository<UserConsent, String> {
    List<UserConsent> findByEmail(String email);
    Optional<UserConsent> findByCheckoutId(String checkoutId);
}
