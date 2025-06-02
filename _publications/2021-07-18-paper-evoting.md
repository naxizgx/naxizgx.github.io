---
title: "ASelf-Tallying Electronic Voting Based on Blockchain"
collection: publications
category: manuscripts
permalink: /publication/2021-07-18-paper-evoting
excerpt: 'This paper constitutes an extended full version of a paper [36] published in the Information Security Applications—20th International Conference (WISA 2019). The journal version improves the technical details and contains additional explanations and experiments.'
date: 2021-07-18
venue: 'TheComputerJournal'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://doi.org/10.1093/comjnl/bxab123'
citation: 'G Zeng, M He, SM Yiu, Z Huang. A self-tallying electronic voting based on blockchain. The Computer Journal 65(12):3020-3034(2022).'
---

Receiver selective opening (RSO) security requires that in a situation where there are one sender and multiple receivers, even if an adversary has access to all ciphertexts and adaptively corrupts some fraction of the receivers to obtain their secret keys, the (potentially related) ciphertexts of the uncorrupted receivers remain secure. All of the existing works construct RSO secure identity-based encryption (IBE) in the single-challenge setting, where each identity is used only once for encryption. This restriction makes RSO security for IBE unrealistic in practice. It is preferable to have IBE schemes with RSO security in the multi-challenge setting in practice, where each identity can be used to encrypt multiple messages. In this paper, we initiate the study of RSO security in the multi-challenge setting (which we call RSOk security) for IBE. Concretely, we show that the conclusion of lower bound, proposed by Yang et al. (in: ASIACRYPT 2020, Springer, 2020), on the secret key size of RSO secure public-key encryption also holds in the IBE setting (i.e., an IBE scheme cannot be RSOk secure if the length of its secret key is not k times larger than the length of message). For construction, we propose a generic construction of IBE achieving RSOk security. Through our generic construction, we can obtain RSOk secure IBE schemes based on decisional linear (DLIN) assumption and learning with error (LWE) assumption. Furthermore, we show that the well-known Fujisaki–Okamoto transformation can be applied to construct a practical IBE scheme achieving RSOk security.