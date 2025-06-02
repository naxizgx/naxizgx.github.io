---
title: "Asymmetric group message franking: Definitions and constructions"
collection: publications
category: conferences
permalink: /publication/2023-04-paper-AGMF
excerpt: 'This paper is about the message franking in group communication scenarios.'
date: 2023-04-16
venue: 'EUROCRYPT 2023'

paperurl: '[PDF](https://eprint.iacr.org/2023/332.pdf)'
slideurl: 'https://iacr.org/submit/files/slides/2023/eurocrypt/eurocrypt2023/27/slides.pdf'
citation: 'J Lai, G Zeng*, Z Huang, SM Yiu, X Mu, J Weng. Asymmetric group message franking: Definitions and constructions. EUROCRYPT 2023'
---
As online group communication scenarios become more and more common these years,  malicious or unpleasant messages are much easier to spread on the internet. Message franking is a crucial cryptographic mechanism designed for content moderation in online end-to-end messaging systems, allowing the receiver of a malicious message to report the message to the moderator. Unfortunately, the existing message franking schemes  only consider  1-1 communication scenarios. 
	
In this paper, we systematically explore message franking in group communication scenarios. We introduce the notion of asymmetric group message franking (AGMF), and formalize its  security requirements. Then, we provide a framework of constructing AGMF from a new primitive, called HPSKEM. We also give a construction of HPSKEM based on the DDH assumption. Plugging the concrete  HPSKEM scheme  into our AGMF framework, we obtain a DDH-based AGMF scheme, which supports message franking in group communication scenarios.

<!-- The contents above will be part of a list of publications, if the user clicks the link for the publication than the contents of section will be rendered as a full page, allowing you to provide more information about the paper for the reader. When publications are displayed as a single page, the contents of the above "citation" field will automatically be included below this section in a smaller font.

slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).' -->
