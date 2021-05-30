package com.example.projetPfa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.projetPfa.entites.Produit;
@Repository
public interface ProduitResporistry  extends JpaRepository<Produit,Integer> {

}
