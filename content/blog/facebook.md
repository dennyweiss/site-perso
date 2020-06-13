---
title: Facebook et le "off-activity"
description: "La goutte d'eau qui fait déborder le vase ! Facebook récolte les données issues de notre navigation en-dehors de la plateforme, mais également de notre utilisation d'applications et de jeux divers. Non merci ! J'en profite pour évoquer quelques alternatives libres, open-sources et décentralisées."
tags:
  - facebook
  - privacy
  - foss
statid: "104326161135839864"
---

Bon, j'étais déjà moyennement chaud concernant toutes les "dérives" de facebook, dont la première consiste à se faire un maximum de pognon à partir de nos données personnelles.

La publicité toujours mieux ciblée (déjà, la publicité en soi est un problème), les suggestions d'amis terriblement précises malgré une absence totale d'amis en communs ou même d'informations permettant objectivement de faire ces liens, sans oublier le fait que chaque clic, chaque seconde passée devant une vidéo est tracké, chaque commentaire ou réaction à un post est une donnée supplémentaire permettant de pouvoir affiner votre profil utilisateur, et donc d'affiner le ciblage, et donc j'imagine de pouvoir vendre encore plus cher les espaces publicitaires.

Bref, j'ai découvert hier ([source](https://www.businessinsider.com/facebook-clear-history-offline-activity-tracker-tool-how-to-use-2020-1?r=US&IR=T)) le registre des "activités en-dehors de facebook", que vous pouvez consulter [à cette adresse](https://www.facebook.com/off_facebook_activity/activity_list) si vous avez un compte, et qui recense des centaines de sites sur lesquels vous avez simplement fait un passage. Ce qui signifie qu'en plus de collecter les données que vous rentrez sciemment dans facebook, il y a également une myriade d'autres informations exploitables qui sont collectées à notre insu.

Vous pouvez tout supprimer, et demander à facebook de ne plus collecter ces informations à l'avenir. Si vous voulez un peu de lecture supplémentaire, on apprend dans [cet article](https://www.businessinsider.com/facebook-learns-what-you-buy-at-physical-stores-ads-explained-2019-12#facebook-only-needs-a-few-data-points-from-retailers-in-order-to-create-a-custom-audience-or-a-group-of-users-it-determines-have-shopped-at-that-retailer-3) que même des magasins physiques peuvent envoyer à facebook des données issu de leurs ventes (par exemple, ce qui a été acheté, et par qui (un numéro de téléphone, un nom, une date de naissance...)). Grâce à ces informations, facebook constitue des liens, des groupes de personnes qui se rendent dans tel ou tel magasin, et s'en servent également pour vous cibler encore un peu plus.

Vous pouvez bien sûr consulter ces données, avec toutefois un petit avertissement :

<img src="/facebook1.png" class="zoom" />

La plupart des gens à qui j'en ai parlé m'ont répondu "et alors ? je m'en fous, j'ai rien à cacher". L'idée n'est pas ici de traiter une énième fois la question, je vous laisse le soin de vous renseigner sur le réflexe "je n'ai rien à cacher" si ça vous intéresse :

- [Présentation pour la LDN (22')](https://www.youtube.com/watch?v=BRrk5_-kXHw)
- [NOTHING TO HIDE (docu FR 2017, 1h26)](https://www.youtube.com/watch?v=djbwzEIv7gE)

## Des solutions

### Continuer avec les GAFAM

Oui, mais avec quelques précautions :

L'utilisation d'un navigateur open-source ([firefox](https://www.mozilla.org/fr/firefox/new/)) par exemple, et utiliser des extensions permettant de supprimer ce tracking :

- [Firefox multi-account containers](https://addons.mozilla.org/en-GB/firefox/addon/multi-account-containers/?src=search) vous permettra d'isoler les sites internet comme facebook du reste de votre navigation.
- [cleanURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/?src=search) supprime automatiquement les éléments de tracking contenus dans les URL que vous visitez
- [Privacy Badger](https://addons.mozilla.org/en-GB/firefox/addon/privacy-badger17/?src=search) bloque les trackers de façon intelligente
- [Ghostery](https://addons.mozilla.org/en-GB/firefox/addon/ghostery/?src=search) vous permet de bloquer les publicités, les trackers.

Pour information, le navigateur Google Chrome, en navigation privée, continue d'envoyer vos données à Google ([source](https://www.lepoint.fr/high-tech-internet/la-fonction-navigation-privee-de-google-chrome-accusee-de-recolter-desdonnees-05-06-2020-2378549_47.php)).

Et pour finir, **prenez le temps de paramétrer la confidentialité** ! Si vous ne dites pas à facebook que vous ne voulez pas qu'il collecte vos données en-dehors de facebook, par défaut, elles seront collectées !

### Quitter les GAFAM

C'est mon choix. En me tournant vers le monde du libre et de l'open-source, j'ai modifié ma façon d'utiliser l'informatique :

- [mastodon](https://joinmastodon.org) est un service de micro-blogging comparable à twitter. C'est libre, gratuit, open-source, sans publicité, sans tracking.
- [diaspora\*](https://framasphere.org) est un réseau social comparable à facebook. C'est libre, gratuit, open-source, sans publicité, sans tracking.
- J'ai vidé mon Drive puis supprimé mon compte Google. Je vais installer un service de cloud personnel avec [nextCloud](https://nextcloud.com/), libre, open-source, gratuit, sans publicité, sans tracking.
- Je me suis rapproché de la communauté [framasoft](https://framasoft.org) qui, depuis sa campagne [déGooglisons internet](https://degooglisons-internet.org/fr/) a développé une multitude d'outils libre, gratuits et open-source, mais également du collectif des [CHATONS](https://chatons.org) (Collectif des Hébergeurs Alternatifs, Transparents, Ouverts, Neutres et Solidaires). Pour chaque service Google, il existe un service libre déconnecté des GAFAM.

Attention, je ne dis pas que c'est la panacée : il peut arriver que "marche moins bien", "c'est moins beau" parfois, certains de ces outils sont en phase de développement permanente, maintenus par des développeurs bénévoles, et il faut parfois être patient. Mais si c'est le prix à payer pour cesser de donner volontairement, avec plaisir, et le sourire, nos informations personnelles à des sociétés qui les revendent pour se faire un maximum de bénéfices, personnellement ça me convient.

## Le fediverse

"Mais t'es bien gentil, qu'est-ce qui me prouve que mastodon et diaspora\* ne deviendront pas les prochains twitter et facebook s'ils grossissent ?"

Oui, je me pose les questions à moi-même. Il faut dire que ces questions, je me les suis déjà posées quand j'ai mis le nez là-dedans. Et bien, mastodon et diaspora* sont des **réseaux sociaux fédérés** : ce qui signifie que n'importe qui peut héberger une instance mastodon ou diaspora* (enfin, il faut quand même avoir un serveur ou en louer un) et permettre à des utilisateurs de s'inscrire. Sauf que ces instances, elles sont fédérées : elles communiquent entre elles.

Exemple : mon compte mastodon est [@mathieu@diaspodon.fr](https://diaspodon.fr/web/accounts/101167) car je me suis inscrit sur l'instance Diaspodon. À l'heure où j'écris ces lignes, il y a 90 utilisateurs inscrits sur l'instance Diaspodon. Et bien, rien ne m'empêche de m'abonner au fil de [@Gargron@mastodon.social](https://mastodon.social/@Gargron) (qui est le créateur de mastodon), qui lui a créé son compte sur l'instance Mastodon.social (qui, elle, accueille 529.000 utilisateurs).

Et le **fediverse**, l'univers des réseaux sociaux fédérés, est vaste : framasoft a développé [PeerTube](https://joinpeertube.org), une alternative fédérée à YouTube, la plateforme [WriteFreely](https://writefreely.org) permet de tenir un blog tout en étant connecté au fediverse, etc, etc...

Le plus beau dans tout ça ? Il existe un protocole commun qui permet à n'importe qui, depuis son compte mastodon, de s'abonner à une chaîne peertube, et donc d'être informé des vidéos publiées, de pouvoir les commenter (toujours depuis mastodon). Bref, c'est beau, ça marche bien, et c'est gratuit.

## Conclusion

Bref, je quitte facebook d'ici quelques jours, parce que ce modèle ne me convient plus.
J'aimerais bien qu'on puisse rester en contact, donc si vous ne savez pas comment me contacter en-dehors de facebook :

- sur mastodon: [@mathieu@diaspodon.fr](https://diaspodon.fr/web/accounts/101167)
- sur framasphère : [@mathieunicolas@framasphere.org](https://framasphere.org/people/8afe88907bc10138dfca2a0000053625)
- par mail (attention l'astuce anti-bot) : [prénom.nom@mailbox.org](mailto:)
