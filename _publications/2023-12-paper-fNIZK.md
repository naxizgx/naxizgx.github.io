---
title: "Non-Interactive Zero-Knowledge Functional Proofs"
collection: publications
category: conferences
permalink: /publication/2023-12-paper-fNIZK
excerpt: 'This paper is about non-interactive zero-knowledge functional proofs.'
date: 2023-12-06
venue: 'ASIACRYPT 2023'
paperurl: 'https://eprint.iacr.org/2023/1759'
slidesurl: 'https://iacr.org/submit/files/slides/2023/asiacrypt/asiacrypt2023/265/slides.pdf'

citation: 'G Zeng, J Lai, Z Huang, L Zhang, X Wang, KY Lam, H Wang, J Weng. Non-interactive zero-knowledge functional proofs. ASIACRYPT 2023.'
---

In this paper, we consider to generalize NIZK by empowering a prover to share a witness in a fine-grained manner with verifiers. Roughly, the prover is able to authorize a verifier to obtain extra information of witness, i.e., besides verifying the truth of the statement, the verifier can additionally obtain certain function  of the witness from the accepting proof using a secret functional key provided by the prover. 

To fulfill these requirements, we introduce a new primitive called  \emph{non-interactive zero-knowledge functional proofs (fNIZKs)}, and formalize its security notions. We provide a generic construction of fNIZK for any relation, which enables the prover to share any function of the witness with a verifier. For a widely-used relation about set membership proof (implying range proof), we construct a concrete and efficient fNIZK, through new building blocks (set membership encryption and dual inner-product encryption), which might be of independent interest.
