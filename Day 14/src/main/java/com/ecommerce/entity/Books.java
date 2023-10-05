package com.ecommerce.entity;

import com.ecommerce.entity.enumerate.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_books")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bid;

    @Column(length = 50, nullable = false)
    private String bookname;

    @Column(length = 50, nullable = false)
    private String bookauthor;

    @Column(nullable = false)
    private String edition;
}
