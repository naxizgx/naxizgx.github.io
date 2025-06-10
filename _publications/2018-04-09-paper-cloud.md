---
title: "Privacy-Preserving Verifiable Elastic Net among Multiple Institutions in the Cloud"
collection: publications
category: manuscripts
permalink: /publication/2018-04-09-paper-cloud
excerpt: 'This paper is about verifiable elastic net among multiple institutions.'
date: 2018-04-09
venue: 'Journal of Computer Security'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://sage.cnpereading.com/paragraph/article/?doi=10.3233/JCS-171107'
citation: 'J Zhang, M He, G Zeng, SM Yiu. Privacy-preserving verifiable elastic net among multiple institutions in the cloud. Journal of Computer Security 26(6):791-815(2018).'
---

With the popularity of cloud computing, an increasing number of institutions would like to outsource their data to an untrusted third-party cloud system. Due to the privacy concern, data must be stored in its encrypted form. On the other hand, data mining techniques have wide applications in real-life scenarios but are usually computationally intensive especially for large datasets. Therefore, we utilize the powerful computing abilities provided by the cloud system to run data mining algorithms. Moreover, combining data from different institutions for a big and varied training set helps enhance data mining performance. To run data mining algorithms on encrypted data for multiple institutions in the cloud, we need to solve two challenges - how to compute on encrypted data under multiple keys and how to verify the correctness of the result. Elastic net is a popular linear regression tool, which is particularly useful when the number of training samples $n$ is much less than the dimension of training samples $m$. To facilitate understanding, we show an application of elastic net to find genomic biomarkers in this paper. To be specific, we propose the first privacy-preserving verifiable elastic net protocol based on reduction to support vector machine using two non-colluding servers. We construct a homomorphic cryptosystem that supports one multiply operation and multiple add operations under both single key and different keys. We allow the involved institutions to verify the correctness of the final result. Thus, collaboration between multiple institutions are made possible without jeopardizing the privacy of data records. We formally prove that our protocol is secure and implement the protocol. The experimental results show that our protocol runs reasonably fast, thus can be applied in practice.