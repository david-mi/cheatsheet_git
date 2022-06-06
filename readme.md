# CHEATSHEET GIT
---

## SWITCH

| Rôle | Commande |
| - | - |
| **Changer de branche** | `git switch <branche>` |
| **Créer une branche et basculer sur celle-ci** | `git switch -c <branche>`

## CHECKOUT

| Rôle | Commande |
| - | - |
| **Changer de branche** | `git checkout <branche>` |
| **Créer une branche et basculer sur celle-ci** | `git checkout -b <branche>`

## LOG

| Rôle | Commande |
| - | - |
| **Afficher un log jusqu'à HEAD** | `git log` |
| **Afficher un log jusqu'à HEAD et au dessus** | `git log --all` |
| **Afficher des logs d'une ligne seulement** | `git log --oneline` |

## COMMIT

| Rôle | <div style="width:250px;">Commande</div> | Remarques |
| - | - | - |
| **Stage et commit des fichiers** | `git commit -am "<message>"` | Cela ne remplace pas un `git add .` suivi d'un commit car le flag `-a` va stage seulement les fichiers déjà suivis alors que `git add .` va stage les changements sur les fichiers suivis mais aussi les nouveaux fichiers qui n'étaient pas encore suivi |
| **Remplacer son précédent commit** | `git commit --amend` | Cette commande va remplacer l'ancien commit par un nouveau qui contiendra les changements qu'on a stage en plus de ceux précédemment commit. Le hash sera différent. Si on veut changer le nom du commit, on peut rajouter `-m <message>`. Au contraire, si on veut juste ajouter des changements en gardant l'ancien message, on peut ajouter `--no-edit`|

## DIFF

| Rôle | Commande | Remarque |
| - | - | - |
| **Voir les changements  des fichiers suivis mais pas encore stage** | `git diff` |
| **Voir tous les changements des fichiers suivis depuis HEAD** | `git diff HEAD` |
| **Voir les changements qui ont été staged** | `git diff --staged` ou `git diff --cached` |
| **Voir les changements dans un ou plusieurs fichiers précis** | `git diff <fichier1> <fichier2> <etc...>` |
| **Voir les changements entre 2 branches** | `git diff <branche1> <branche2>` ou `git diff <branche1>..<branche2>` | Va comparer les différences sur le dernier commit fait dans les 2 branches. possibilité de faire la comparaison sur un ou plusieurs fichiers précis en rajoutant les noms de fichiers à la suite|
|**Voir les changements entre 2 commits**| `git diff <commit1> <commit2>` ou `git diff <commit1>..<commit2>`| Il est aussi possible de ne citer qu'un seul commit et par défaut ça fera une comparaison de ce commit a HEAD, exemple `git diff HEAD~1` va comparer les changements entre le dernier commit et HEAD


## INFOS COMPLÉMENTAIRES
---

## Merging

 ![ffmerge](./screens/fast_foward_merge.png)

