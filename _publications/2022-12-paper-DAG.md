---
title: "DAG-Σ: A DAG-Based Sigma Protocol for Relations in CNF"
collection: publications
category: conferences
permalink: /publication/2022-12-paper-DAG
excerpt: 'This paper is about the composition of Sigma protocols for relations in CNF.'

date: 2022-12-05
venue: 'ASIACRYPT 2022'
paperurl: '[PDF](https://eprint.iacr.org/2022/1569.pdf)'
citation: 'G Zeng, J Lai, Z Huang, Y Wang, Z Zheng. DAG-Σ: A DAG-Based Sigma Protocol for Relations in CNF. ASIACRYPT 2022'
---
At CRYPTO 1994, Cramer, Damg{\aa}rd and Schoenmakers proposed a general method to construct proofs of  knowledge (PoKs), especially for $k$-out-of-$n$ partial knowledge, of which relations can be expressed in disjunctive normal form (DNF). Since then, proofs of $k$-out-of-$n$ partial knowledge have attracted much attention and some efficient constructions have been proposed. However, many practical scenarios require efficient PoK protocols for partial knowledge in other forms.

    In this paper, we mainly focus on PoK protocols for $k$-conjunctive normal form ($k$-CNF) relations, which have $n$ statements and can be expressed as follows: (i) $k$ statements constitute a clause via ``OR'' operations, and (ii) the relation consists of multiple clauses via ``AND'' operations. 
    We propose an alternative Sigma protocol (called DAG-Σ protocol) for $k$-CNF relations (in the discrete logarithm setting), by converting these  relations to  directed acyclic graphs (DAGs).  Our DAG-Σ protocol achieves less communication cost and smaller computational overhead compared with Cramer et al.\'s general method.
